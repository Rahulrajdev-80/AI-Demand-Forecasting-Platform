import {
  Sparkles,
  CalendarDays,
  Bell,
  FileText,
  Download,
  CheckCircle,
  Clock3,
  MoreVertical,
  LogOut,
} from "lucide-react";

function Reports() {

  const recentReports = [
    {
      name: "Forecast Report - May 2024",
      type: "PDF",
      date: "May 26, 2024 10:30 AM",
      size: "2.45 MB",
      status: "Completed",
    },
    {
      name: "Monthly Forecast Data - May 2024",
      type: "Excel",
      date: "May 26, 2024 10:15 AM",
      size: "1.12 MB",
      status: "Completed",
    },
  ];

  return (

    <div className="min-h-screen bg-[#020b45] text-white p-8">

      {/* HEADER */}

      <div className="flex justify-between items-start mb-8">

        <div>

          <div className="flex items-center gap-4">

            <h1 className="text-6xl font-bold">
              AI Reports Center
            </h1>

            <Sparkles
              className="text-blue-300"
              size={40}
            />

          </div>

          <p className="text-gray-400 text-2xl mt-3">
            Generate and download business forecasting reports
          </p>

        </div>

        <div className="flex items-center gap-5">

          <div className="bg-[#081652] border border-[#213b82] rounded-2xl px-7 py-4 flex items-center gap-3">

            <CalendarDays size={24} />

            <span className="text-xl">
              May 20 - May 26, 2024
            </span>

          </div>

          <div className="w-16 h-16 rounded-2xl border border-[#213b82] flex items-center justify-center">

            <Bell size={24} />

          </div>

          <div className="flex items-center gap-4 bg-[#081652] px-5 py-3 rounded-2xl border border-[#213b82]">

            <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center text-2xl font-bold">

              A

            </div>

            <div>

              <h2 className="text-xl font-semibold">
                Admin User
              </h2>

              <p className="text-gray-400">
                Administrator
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* TOP BANNER */}

      <div className="bg-[#081652] border border-[#213b82] rounded-[30px] p-8 mb-8 flex justify-between items-center">

        <div className="flex items-center gap-6">

          <div className="w-20 h-20 rounded-3xl bg-blue-500 flex items-center justify-center">

            <FileText size={40} />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              Insightful Business Reports
            </h2>

            <p className="text-gray-400 text-xl mt-2">
              Download comprehensive forecasting analytics and actionable business insights.
            </p>

          </div>

        </div>

        <div className="text-7xl">

          📄

        </div>

      </div>

      {/* REPORT CARDS */}

      <div className="grid grid-cols-2 gap-8 mb-8">

        {/* PDF CARD */}

        <div className="bg-[#081652] border border-red-500 rounded-[30px] p-8">

          <div className="flex justify-between items-start">

            <div>

              <div className="flex items-center gap-4">

                <div className="w-20 h-20 rounded-3xl bg-red-500 flex items-center justify-center text-4xl">

                  📄

                </div>

                <div>

                  <div className="flex items-center gap-3">

                    <h2 className="text-5xl font-bold">
                      PDF Report
                    </h2>

                    <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-xl text-sm">

                      Recommended

                    </span>

                  </div>

                  <p className="text-gray-400 text-xl mt-4 leading-10">

                    Download detailed forecasting analytics, trend analysis,
                    and business insights in PDF format.

                  </p>

                </div>

              </div>

              <div className="mt-8 space-y-5 text-xl">

                <div className="flex items-center gap-3">
                  <CheckCircle className="text-red-400" />
                  Executive Summary
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="text-red-400" />
                  Revenue Forecast Charts
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="text-red-400" />
                  Trend & Growth Analysis
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="text-red-400" />
                  AI Insights & Recommendations
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="text-red-400" />
                  Data Quality Overview
                </div>

              </div>

            </div>

            <div className="text-8xl">

              📑

            </div>

          </div>

          <button className="w-full mt-10 bg-red-500 hover:bg-red-600 transition-all py-5 rounded-2xl text-2xl font-semibold flex items-center justify-center gap-4">

            <Download size={28} />

            Download PDF Report

          </button>

        </div>

        {/* EXCEL CARD */}

        <div className="bg-[#081652] border border-green-500 rounded-[30px] p-8">

          <div className="flex justify-between items-start">

            <div>

              <div className="flex items-center gap-4">

                <div className="w-20 h-20 rounded-3xl bg-green-500 flex items-center justify-center text-4xl">

                  📊

                </div>

                <div>

                  <h2 className="text-5xl font-bold">
                    Excel Report
                  </h2>

                  <p className="text-gray-400 text-xl mt-4 leading-10">

                    Export raw data, monthly forecasts, and analytics
                    in Excel format for deeper analysis.

                  </p>

                </div>

              </div>

              <div className="mt-8 space-y-5 text-xl">

                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-400" />
                  Monthly Forecast Data
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-400" />
                  Raw Dataset Export
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-400" />
                  Forecast Metrics & KPIs
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-400" />
                  Data Tables & Summary
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-400" />
                  Easy to Analyze
                </div>

              </div>

            </div>

            <div className="text-8xl">

              📗

            </div>

          </div>

          <button className="w-full mt-10 bg-green-500 hover:bg-green-600 transition-all py-5 rounded-2xl text-2xl font-semibold flex items-center justify-center gap-4">

            <Download size={28} />

            Download Excel Report

          </button>

        </div>

      </div>

      {/* RECENT REPORTS */}

      <div className="bg-[#081652] border border-[#213b82] rounded-[30px] p-8">

        <div className="flex justify-between items-center mb-8">

          <div className="flex items-center gap-3">

            <Clock3 className="text-red-400" />

            <h2 className="text-4xl font-bold">
              Recent Reports
            </h2>

          </div>

          <button className="bg-[#0d1e63] px-6 py-3 rounded-xl text-lg">

            View All

          </button>

        </div>

        <table className="w-full">

          <thead>

            <tr className="text-left text-gray-400 border-b border-[#213b82]">

              <th className="pb-5 text-xl">Report Name</th>
              <th className="pb-5 text-xl">Type</th>
              <th className="pb-5 text-xl">Generated On</th>
              <th className="pb-5 text-xl">Size</th>
              <th className="pb-5 text-xl">Status</th>
              <th className="pb-5 text-xl">Action</th>

            </tr>

          </thead>

          <tbody>

            {recentReports.map((report, index) => (

              <tr
                key={index}
                className="border-b border-[#162763]"
              >

                <td className="py-6 text-xl">
                  {report.name}
                </td>

                <td className="py-6">

                  <span className={`px-4 py-2 rounded-xl text-lg ${
                    report.type === "PDF"
                      ? "bg-red-500/20 text-red-400"
                      : "bg-green-500/20 text-green-400"
                  }`}>

                    {report.type}

                  </span>

                </td>

                <td className="py-6 text-xl">
                  {report.date}
                </td>

                <td className="py-6 text-xl">
                  {report.size}
                </td>

                <td className="py-6">

                  <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl text-lg">

                    {report.status}

                  </span>

                </td>

                <td className="py-6">

                  <div className="flex items-center gap-3">

                    <button className="w-12 h-12 rounded-xl bg-[#0d1e63] flex items-center justify-center">

                      <Download size={20} />

                    </button>

                    <button className="w-12 h-12 rounded-xl bg-[#0d1e63] flex items-center justify-center">

                      <MoreVertical size={20} />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}

export default Reports;