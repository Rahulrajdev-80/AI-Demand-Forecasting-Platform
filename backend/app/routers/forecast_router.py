import pandas as pd

from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status
)

from sqlalchemy.orm import Session

from prophet import Prophet

from sklearn.metrics import (
    mean_absolute_percentage_error
)

from app.database import get_db

from app.models.dataset import Dataset
from app.models.user import User

from app.auth.oauth2 import get_current_user


router = APIRouter(
    prefix="/forecast",
    tags=["Forecast"]
)


@router.get("/predict")
def predict_future_sales(

    future_months: int = 6,

    category: str = None,

    product: str = None,

    db: Session = Depends(get_db),

    current_user: User = Depends(
        get_current_user
    )
):

    # ============================
    # VALIDATE INPUT
    # ============================

    if future_months <= 0:

        raise HTTPException(

            status_code=status.HTTP_400_BAD_REQUEST,

            detail="future_months must be greater than 0"
        )

    # ============================
    # GET LATEST DATASET
    # ============================

    dataset = db.query(Dataset).filter(

        Dataset.uploaded_by == current_user.id

    ).order_by(

        Dataset.created_at.desc()

    ).first()

    if not dataset:

        raise HTTPException(

            status_code=status.HTTP_404_NOT_FOUND,

            detail="No dataset found"
        )

    # ============================
    # READ DATASET
    # ============================

    try:

        if dataset.file_path.endswith(".csv"):

            df = pd.read_csv(
                dataset.file_path
            )

        else:

            df = pd.read_excel(
                dataset.file_path
            )

    except Exception as e:

        raise HTTPException(

            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,

            detail=f"Error reading dataset: {str(e)}"
        )

    # ============================
    # DETECT REQUIRED COLUMNS
    # ============================

    date_column = None
    sales_column = None

    category_column = None
    product_column = None

    for col in df.columns:

        col_name = col.lower()

        # DATE COLUMN

        if "date" in col_name:

            date_column = col

        # SALES COLUMN

        if (

            "sales" in col_name
            or "revenue" in col_name
            or "amount" in col_name
            or "income" in col_name
        ):

            sales_column = col

        # CATEGORY COLUMN

        if "category" in col_name:

            category_column = col

        # PRODUCT COLUMN

        if (
            "product" in col_name
            or "brand" in col_name
        ):

            product_column = col

    if not date_column or not sales_column:

        raise HTTPException(

            status_code=status.HTTP_400_BAD_REQUEST,

            detail="Required columns not found"
        )

    # ============================
    # PROCESS DATA
    # ============================

    try:

        # ============================
        # APPLY CATEGORY FILTER
        # ============================

        if (

            category
            and category_column
            and category.strip() != ""
        ):

            df = df[

                df[category_column]
                .astype(str)
                .str.lower()

                == category.lower()
            ]

        # ============================
        # APPLY PRODUCT FILTER
        # ============================

        if (

            product
            and product_column
            and product.strip() != ""
        ):

            df = df[

                df[product_column]
                .astype(str)
                .str.lower()

                == product.lower()
            ]

        # ============================
        # CHECK FILTERED DATA
        # ============================

        if df.empty:

            raise HTTPException(

                status_code=404,

                detail="No matching data found"
            )

        # ============================
        # MINIMUM ROW VALIDATION
        # ============================

        if len(df) < 3:

            raise HTTPException(

                status_code=400,

                detail="Minimum 3 rows required for forecasting"
            )

        # ============================
        # CONVERT DATE COLUMN
        # ============================

        df[date_column] = pd.to_datetime(
            df[date_column]
        )

        # ============================
        # CREATE MONTH COLUMN
        # ============================

        df["month"] = df[
            date_column
        ].dt.to_period("M")

        # ============================
        # MONTHLY AGGREGATION
        # ============================

        monthly_data = (

            df.groupby("month")[sales_column]
            .sum()
            .reset_index()
        )

        # ============================
        # VALIDATE MONTHLY DATA
        # ============================

        if len(monthly_data) < 2:

            raise HTTPException(

                status_code=400,

                detail="Minimum 2 months historical data required"
            )

    except Exception as e:

        raise HTTPException(

            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,

            detail=f"Error processing dataset: {str(e)}"
        )

    # ============================
    # PREPARE DATA FOR PROPHET
    # ============================

    prophet_df = monthly_data.rename(

        columns={

            "month": "ds",

            sales_column: "y"
        }
    )

    prophet_df["ds"] = prophet_df["ds"].astype(str)

    prophet_df["ds"] = pd.to_datetime(
        prophet_df["ds"]
    )

    # ============================
    # TRAIN / TEST SPLIT
    # ============================

    if len(prophet_df) < 4:

        train_df = prophet_df

        test_df = pd.DataFrame()

    else:

        split_index = int(
            len(prophet_df) * 0.8
        )

        train_df = prophet_df.iloc[
            :split_index
        ]

        test_df = prophet_df.iloc[
            split_index:
        ]

    # ============================
    # TRAIN MODEL
    # ============================

    model = Prophet(

        yearly_seasonality=True,

        weekly_seasonality=False,

        daily_seasonality=False,

        changepoint_prior_scale=0.05,

        seasonality_mode="multiplicative"
    )

    print(train_df)
    print("TRAIN DATA LENGTH:", len(train_df))

    model.fit(train_df)

    # ============================
    # CALCULATE ERROR
    # ============================

    if not test_df.empty:

        test_forecast = model.predict(

            test_df[["ds"]]
        )

        mape = mean_absolute_percentage_error(

            test_df["y"],

            test_forecast["yhat"]
        )

        forecast_error = round(
            mape * 100,
            2
        )

    else:

        forecast_error = 0

    # ============================
    # FINAL MODEL TRAINING
    # ============================

    final_model = Prophet(

        yearly_seasonality=True,

        weekly_seasonality=False,

        daily_seasonality=False,

        changepoint_prior_scale=0.05,

        seasonality_mode="multiplicative"
    )

    final_model.fit(prophet_df)

    # ============================
    # CREATE FUTURE DATAFRAME
    # ============================

    future = final_model.make_future_dataframe(

        periods=future_months,

        freq="MS"
    )

    # ============================
    # PREDICT FUTURE
    # ============================

    forecast = final_model.predict(
        future
    )

    # ============================
    # FILTER FUTURE DATA
    # ============================

    last_training_date = prophet_df["ds"].max()

    future_forecast = forecast[
        forecast["ds"] > last_training_date
    ].head(future_months)

    # ============================
    # BUILD RESPONSE
    # ============================

    forecast_results = []

    for _, row in future_forecast.iterrows():

        forecast_results.append({

            "month": row["ds"].strftime("%Y-%m"),

            "predicted_revenue": round(
                float(row["yhat"]),
                2
            )
        })

    # ============================
    # RETURN RESPONSE
    # ============================

    return {

        "model": "Prophet Forecasting",

        "category_filter": category,

        "product_filter": product,

        "forecast_error_mape": forecast_error,

        "forecast_months": future_months,

        "forecast": forecast_results
    }