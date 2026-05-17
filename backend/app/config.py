from dotenv import load_dotenv
import os

DATABASE_URL = "sqlite:///./demand_forecasting.db"

load_dotenv()

SECRET_KEY = "mysecretkey"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30