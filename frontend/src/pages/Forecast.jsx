import {
  Sparkles,
  Filter,
  BrainCircuit,
  TrendingUp,
  CheckCircle,
  ShieldCheck,
  Lightbulb,
  CalendarDays,
  ArrowUpRight,
  Bot,
} from "lucide-react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { Link } from "react-router-dom";

const chartData = [
  { month: "May 2024", revenue: 4.2 },
  { month: "Jun 2024", revenue: 5.8 },
  { month: "Jul 2024", revenue: 7.4 },
  { month: "Aug 2024", revenue: 8.6 },
  { month: "Sep 2024", revenue: 10.2 },
  { month: "Oct 2024", revenue: 12.1 },
];

const predictions = [
  {
    month: "May 2024",
    revenue: "₹ 4.20 Cr",
    growth: "—",
    confidence: "92%",
  },
  {
    month: "Jun 2024",
    revenue: "₹ 5.80 Cr",
    growth: "38.1%",
    confidence: "93%",
  },
  {
    month: "Jul 2024",
    revenue: "₹ 7.40 Cr",
    growth: "27.6%",
    confidence: "94%",
  },
  {
    month: "Aug 2024",
    revenue: "₹ 8.60 Cr",
    growth: "16.2%",
    confidence: "94%",
  },
  {
    month: "Sep 2024",
    revenue: "₹ 10.20 Cr",
    growth: "18.6%",
    confidence: "95%",
  },
  {
    month: "Oct 2024",
    revenue: "₹ 12.10 Cr",
    growth: "18.6%",
    confidence: "95%",
  },
];

function Forecast() {

  return (

    <div className="min-h-screen bg-[#020b45] text-white p-8">

      {/* HEADER */}

      <div className="flex justify-between items-start mb-8">

        <div>

          <div className="flex items-center gap-4">

            <h1 className="text-7xl font-bold leading-none">
              AI Forecast Intelligence
            </h1>

            <Sparkles
              size={48}
              className="text-yellow-400"
            />

          </div>

          <p className="text-gray-400 text-2xl mt-4">
            Advanced Prophet-based business demand forecasting system
          </p>

        </div>

        <div className="bg-[#07154a] border border-[#28418e] rounded-2xl px-8 py-5 flex items-center gap-4">

          <CalendarDays size={28} />

          <span className="text-2xl">
            May 20 - May 26, 2024
          </span>

        </div>

      </div>

      {/* FILTER SECTION */}

      <div className="bg-[#07154a] border border-[#132f72] rounded-[28px] p-8 mb-6">

        <div className="flex items-center gap-3 mb-6">

          <Filter size={22} />

          <h2 className="text-[32px] font-bold">
            Forecast Filters
          </h2>

        </div>

        <div className="grid grid-cols-4 gap-5">

          {/* DOMAIN CATEGORY */}

          <select className="bg-[#081d59] border border-[#3150aa] rounded-2xl px-5 py-5 text-[18px] outline-none text-white">

            <option>Automobile</option>
            <option>Retail</option>
            <option>Food Delivery</option>
            <option>E-Commerce</option>
            <option>Healthcare</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Grocery</option>
            <option>Banking</option>
            <option>Logistics</option>

          </select>

          {/* PRODUCT TYPE */}

          <select className="bg-[#081d59] border border-[#3150aa] rounded-2xl px-5 py-5 text-[18px] outline-none text-white">

            <option>Hyundai Creta - Car Sales</option>
            <option>Tata Nexon - Vehicle Demand</option>
            <option>Amazon Product Sales</option>
            <option>Swiggy Orders Forecast</option>
            <option>Medicine Demand Forecast</option>
            <option>Mobile Sales Analytics</option>
            <option>Clothing Demand Prediction</option>
            <option>Grocery Product Sales</option>
            <option>Shipment Forecasting</option>

          </select>

          {/* FORECAST MONTHS */}

          <select className="bg-[#081d59] border border-[#3150aa] rounded-2xl px-5 py-5 text-[18px] outline-none text-white">

            <option>3 Months</option>
            <option>6 Months</option>
            <option>9 Months</option>
            <option>12 Months</option>
            <option>24 Months</option>
            <option>36 Months</option>
            <option>60 Months</option>
            <option>120 Months (10 Years)</option>

          </select>

          {/* BUTTON */}

          <button className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-[20px] font-semibold hover:scale-[1.02] transition-all duration-300">

            Generate Forecast

          </button>

        </div>

      </div>

      {/* TOP CARDS */}

      <div className="grid grid-cols-4 gap-6 mb-6">

        {/* CARD 1 */}

        <div className="bg-gradient-to-br from-[#2f46b8] to-[#202d7e] rounded-[28px] p-6 h-[230px]">

          <div className="flex justify-between items-start">

            <div>

              <p className="text-[18px] text-gray-300">
                AI Model
              </p>

              <h2 className="text-[32px] font-bold mt-6 leading-tight">
                Prophet
                <br />
                Forecasting
              </h2>

            </div>

            <div className="w-20 h-20 rounded-full bg-[#3f63ff] flex items-center justify-center">

              <BrainCircuit size={38} />

            </div>

          </div>

        </div>

        {/* CARD 2 */}

        <div className="bg-gradient-to-r from-orange-600 to-pink-600 rounded-[28px] p-6 h-[230px]">

          <div className="flex justify-between items-start">

            <div>

              <p className="text-[18px]">
                Forecast Error (MAPE)
              </p>

              <h2 className="text-[60px] font-bold mt-10">
                0%
              </h2>

            </div>

            <div className="w-20 h-20 rounded-full bg-[#ff9a4f] flex items-center justify-center">

              <TrendingUp size={40} />

            </div>

          </div>

        </div>

        {/* CARD 3 */}

        <div className="bg-gradient-to-b from-[#711cb6] to-[#8b2cf4] rounded-[28px] p-6 h-[230px]">

          <div className="flex justify-between items-start">

            <div>

              <p className="text-[18px]">
                Forecast Months
              </p>

              <h2 className="text-[70px] font-bold mt-10">
                6
              </h2>

            </div>

            <div className="w-20 h-20 rounded-full bg-[#b25dff] flex items-center justify-center">

              <ArrowUpRight size={40} />

            </div>

          </div>

        </div>

        {/* CARD 4 */}

        <div className="bg-[#16a34a] rounded-[28px] p-6 h-[230px]">

          <div className="flex justify-between items-start">

            <div>

              <p className="text-[18px]">
                Prediction Status
              </p>

              <h2 className="text-[70px] font-bold mt-10 leading-none">
                Active
              </h2>

            </div>

            <div className="w-20 h-20 rounded-full bg-[#22d466] flex items-center justify-center">

              <CheckCircle size={40} />

            </div>

          </div>

        </div>

      </div>

      {/* GRAPH + INSIGHTS */}

      <div className="grid grid-cols-3 gap-6 mb-6">

        {/* GRAPH SECTION */}

        <div className="col-span-2 bg-[#07154a] border border-[#16367e] rounded-[28px] p-8">

          <div className="flex justify-between items-start mb-6">

            <div>

              <h2 className="text-[28px] font-bold">
                Future Revenue Prediction
              </h2>

              <p className="text-gray-400 text-lg mt-2">
                AI-generated forecast trend analysis using Prophet forecasting
              </p>

            </div>

            <button className="border border-[#3150aa] px-6 py-4 rounded-2xl text-xl">

              6 Months

            </button>

          </div>

          {/* GRAPH */}

          <div className="h-[420px]">

            <ResponsiveContainer width="100%" height="100%">

              <AreaChart data={chartData}>

                <defs>

                  <linearGradient
                    id="colorRevenue"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      offset="5%"
                      stopColor="#8b5cf6"
                      stopOpacity={0.9}
                    />

                    <stop
                      offset="95%"
                      stopColor="#8b5cf6"
                      stopOpacity={0.05}
                    />

                  </linearGradient>

                </defs>

                <CartesianGrid
                  stroke="#22336f"
                  vertical={false}
                />

                <XAxis
                  dataKey="month"
                  stroke="#9ca3af"
                  tick={{
                    fill: "#9ca3af",
                    fontSize: 18
                  }}
                />

                <YAxis
                  stroke="#9ca3af"
                  tick={{
                    fill: "#9ca3af",
                    fontSize: 18
                  }}
                  domain={[0, 14]}
                  ticks={[0, 2, 4, 6, 8, 10, 12, 14]}
                  tickFormatter={(value) =>
                    value === 0 ? "0" : `${value}Cr`
                  }
                />

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    border: "none",
                    color: "#000",
                    fontSize: "16px",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#a855f7"
                  strokeWidth={5}
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                  dot={{
                    r: 7,
                    fill: "#7c3aed",
                    stroke: "#ffffff",
                    strokeWidth: 3,
                  }}
                  activeDot={{
                    r: 9,
                    fill: "#ffffff",
                    stroke: "#a855f7",
                    strokeWidth: 4,
                  }}
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* INSIGHTS */}

        <div className="bg-[#07154a] border border-[#16367e] rounded-[28px] p-8">

          <h2 className="text-[28px] font-bold mb-10">
            AI Forecast Insights
          </h2>

          <div className="space-y-10">

            <div className="flex gap-5">

              <div className="w-20 h-20 rounded-3xl bg-[#2563eb] flex items-center justify-center">

                <TrendingUp size={38} />

              </div>

              <div>

                <h3 className="text-[22px] font-bold">
                  Trend Analysis
                </h3>

                <p className="text-gray-400 text-lg mt-2">
                  Prophet model identified long-term sales growth and seasonal demand patterns.
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="w-20 h-20 rounded-3xl bg-[#9333ea] flex items-center justify-center">

                <ShieldCheck size={38} />

              </div>

              <div>

                <h3 className="text-[22px] font-bold">
                  Forecast Quality
                </h3>

                <p className="text-gray-400 text-lg mt-2">
                  Current forecast error is 0% MAPE based on unseen validation data.
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="w-20 h-20 rounded-3xl bg-[#16a34a] flex items-center justify-center">

                <Lightbulb size={38} />

              </div>

              <div>

                <h3 className="text-[22px] font-bold">
                  Business Recommendation
                </h3>

                <p className="text-gray-400 text-lg mt-2">
                  Use forecasting insights to optimize inventory planning and future sales strategy.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM SECTION */}

      <div className="grid grid-cols-4 gap-6">

        {/* AI CARD */}

        <div className="bg-[#07154a] border border-[#16367e] rounded-[28px] p-8 flex flex-col justify-between">

          <div>

            <div className="w-36 h-36 rounded-3xl bg-gradient-to-br from-[#182b7d] to-[#5b21b6] flex items-center justify-center mb-8">

              <Bot size={90} className="text-white" />

            </div>

            <h2 className="text-[30px] font-bold leading-tight">
              AI Powered
              <br />
              Forecasting
            </h2>

            <p className="text-gray-400 text-lg mt-5 leading-9">
              Advanced Prophet models for accurate demand prediction
            </p>

          </div>

          <Link to="/forecast-history">

            <button className="w-full mt-10 bg-gradient-to-r from-blue-500 to-purple-600 py-5 rounded-2xl text-[22px] font-semibold hover:scale-[1.02] transition-all duration-300">

              Learn More →

            </button>

          </Link>

        </div>

        {/* TABLE */}

        <div className="col-span-3 bg-[#07154a] border border-[#16367e] rounded-[28px] p-8">

          <h2 className="text-[34px] font-bold mb-8">
            Future Predictions
          </h2>

          <div className="overflow-hidden rounded-2xl">

            <table className="w-full">

              <thead>

                <tr className="text-left text-gray-400 border-b border-[#22336f]">

                  <th className="pb-5 text-xl">
                    Forecast Month
                  </th>

                  <th className="pb-5 text-xl">
                    Predicted Revenue
                  </th>

                  <th className="pb-5 text-xl">
                    Growth
                  </th>

                  <th className="pb-5 text-xl">
                    Status
                  </th>

                  <th className="pb-5 text-xl">
                    Confidence
                  </th>

                </tr>

              </thead>

              <tbody>

                {predictions.map((item, index) => (

                  <tr
                    key={index}
                    className="border-b border-[#1b2b68]"
                  >

                    <td className="py-6 text-2xl">
                      {item.month}
                    </td>

                    <td className="py-6 text-2xl">
                      {item.revenue}
                    </td>

                    <td className="py-6 text-2xl text-green-400">
                      {item.growth}
                    </td>

                    <td className="py-6">

                      <span className="bg-green-500/20 text-green-400 px-5 py-3 rounded-xl text-lg">

                        Predicted

                      </span>

                    </td>

                    <td className="py-6">

                      <div className="flex items-center gap-4">

                        <div className="w-52 h-4 bg-[#24366f] rounded-full overflow-hidden">

                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            style={{
                              width: item.confidence
                            }}
                          />

                        </div>

                        <span className="text-xl">
                          {item.confidence}
                        </span>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Forecast;