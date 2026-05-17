// src/pages/UploadDataset.jsx

import React, { useRef, useState } from "react";

import {
  Upload,
  FileSpreadsheet,
  ShieldCheck,
  Clock3,
  Eye,
  Folder,
  Bell,
  CalendarDays,
  Menu,
  ChevronDown,
  Info,
  Lock,
  FileUp,
  BarChart3,
} from "lucide-react";

export default function UploadDataset() {

  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleButtonClick = () => {

    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {

    const file = event.target.files[0];

    if (file) {

      setSelectedFile(file);
    }
  };

  return (

    <div className="
      p-6
      bg-[#030712]
      min-h-screen
      text-white
    ">

      {/* TOP HEADER */}

      <div className="
        flex
        items-center
        justify-between
        mb-8
      ">

        {/* LEFT */}

        <div className="
          flex
          items-center
          gap-5
        ">

          {/* MENU */}

          <div className="
            w-14
            h-14
            rounded-2xl
            border
            border-[#1e293b]
            bg-[#081028]
            flex
            items-center
            justify-center
            shadow-lg
          ">

            <Menu size={28} />

          </div>

          {/* TITLE */}

          <div>

            <h1 className="
              text-5xl
              font-bold
              leading-tight
            ">

              Upload Your Dataset

            </h1>

            <p className="
              text-gray-400
              text-xl
              mt-2
            ">

              Upload CSV or Excel files for AI-powered demand forecasting

            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="
          flex
          items-center
          gap-5
        ">

          {/* DATE */}

          <div className="
            flex
            items-center
            gap-4
            px-6
            py-4
            rounded-2xl
            bg-[#081028]
            border
            border-[#1e293b]
          ">

            <CalendarDays size={22} />

            <span className="text-lg">
              May 20 - May 26, 2024
            </span>

            <ChevronDown size={18} />

          </div>

          {/* NOTIFICATION */}

          <div className="
            relative
            w-14
            h-14
            rounded-2xl
            bg-[#081028]
            border
            border-[#1e293b]
            flex
            items-center
            justify-center
          ">

            <Bell size={22} />

            <div className="
              absolute
              top-3
              right-3
              w-3
              h-3
              rounded-full
              bg-red-500
            " />

          </div>

          {/* USER */}

          <div className="
            flex
            items-center
            gap-4
            px-5
            py-3
            rounded-2xl
            bg-[#081028]
            border
            border-[#1e293b]
          ">

            <div className="
              w-14
              h-14
              rounded-full
              bg-gradient-to-r
              from-blue-500
              to-violet-600
              flex
              items-center
              justify-center
              text-xl
              font-bold
            ">

              A

            </div>

            <div>

              <h2 className="
                text-2xl
                font-bold
              ">

                Admin User

              </h2>

              <p className="
                text-gray-400
              ">

                Administrator

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* MAIN GRID */}

      <div className="
        grid
        grid-cols-1
        xl:grid-cols-4
        gap-6
      ">

        {/* LEFT */}

        <div className="
          xl:col-span-3
          space-y-6
        ">

          {/* UPLOAD CARD */}

          <div className="
            rounded-3xl
            border
            border-[#1e293b]
            bg-[#071124]
            p-8
            shadow-2xl
          ">

            <div className="
              border-2
              border-dashed
              border-violet-500/30
              rounded-3xl
              p-20
              text-center
            ">

              {/* ICON */}

              <div className="
                flex
                justify-center
                mb-8
              ">

                <Upload
                  size={90}
                  className="
                    text-violet-400
                    drop-shadow-[0_0_30px_#8b5cf6]
                  "
                />

              </div>

              {/* TITLE */}

              <h1 className="
                text-6xl
                font-bold
                mb-6
              ">

                Drag & Drop Dataset Here

              </h1>

              {/* SUBTITLE */}

              <p className="
                text-gray-400
                text-2xl
                mb-10
              ">

                Upload CSV or Excel files for analytics and forecasting

              </p>

              {/* INPUT */}

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".csv,.xlsx"
                className="hidden"
              />

              {/* BUTTON */}

              <button
                onClick={handleButtonClick}
                className="
                  px-16
                  py-5
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-500
                  to-violet-600
                  text-2xl
                  font-bold
                  shadow-[0_0_35px_rgba(139,92,246,0.7)]
                  hover:scale-105
                  transition
                "
              >

                Choose File

              </button>

              {/* FILE NAME */}

              {
                selectedFile && (

                  <p className="
                    mt-6
                    text-green-400
                    text-xl
                    font-semibold
                  ">

                    {selectedFile.name}

                  </p>
                )
              }

              {/* OR */}

              <div className="
                flex
                items-center
                gap-6
                my-12
              ">

                <div className="
                  flex-1
                  h-[1px]
                  bg-[#1e293b]
                " />

                <div className="
                  w-14
                  h-14
                  rounded-full
                  border
                  border-[#1e293b]
                  flex
                  items-center
                  justify-center
                  bg-[#081028]
                  text-lg
                ">

                  OR

                </div>

                <div className="
                  flex-1
                  h-[1px]
                  bg-[#1e293b]
                " />

              </div>

              {/* FORMATS */}

              <div className="
                text-gray-400
                text-xl
              ">

                Supported Formats:
                {" "}

                <span className="
                  text-blue-400
                  font-semibold
                ">

                  CSV, XLSX

                </span>

                {" | "}

                Maximum File Size:
                {" "}

                <span className="
                  text-violet-400
                  font-semibold
                ">

                  50MB

                </span>

              </div>

            </div>

          </div>

          {/* BOTTOM CARDS */}

          <div className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-6
          ">

            {/* PREVIEW */}

            <div className="
              rounded-3xl
              border
              border-[#1e293b]
              bg-[#071124]
              overflow-hidden
            ">

              {/* HEADER */}

              <div className="
                p-6
                border-b
                border-[#1e293b]
                flex
                items-center
                gap-4
              ">

                <div className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-blue-500/20
                  flex
                  items-center
                  justify-center
                ">

                  <Eye
                    className="text-blue-400"
                  />

                </div>

                <div>

                  <h2 className="
                    text-3xl
                    font-bold
                  ">

                    Dataset Preview

                  </h2>

                  <p className="
                    text-gray-400
                  ">

                    Your uploaded data will be previewed here

                  </p>

                </div>

              </div>

              {/* BODY */}

              <div className="
                h-[300px]
                m-6
                rounded-3xl
                border-2
                border-dashed
                border-violet-500/20
                flex
                flex-col
                items-center
                justify-center
              ">

                <FileSpreadsheet
                  size={70}
                  className="text-gray-500"
                />

                <h2 className="
                  text-3xl
                  font-bold
                  mt-6
                ">

                  No dataset uploaded yet

                </h2>

                <p className="
                  text-gray-400
                  text-lg
                  mt-4
                ">

                  Upload a dataset to see preview

                </p>

              </div>

            </div>

            {/* RECENT */}

            <div className="
              rounded-3xl
              border
              border-[#1e293b]
              bg-[#071124]
              overflow-hidden
            ">

              {/* HEADER */}

              <div className="
                p-6
                border-b
                border-[#1e293b]
                flex
                justify-between
                items-center
              ">

                <div className="
                  flex
                  items-center
                  gap-4
                ">

                  <div className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-violet-500/20
                    flex
                    items-center
                    justify-center
                  ">

                    <Clock3
                      className="text-violet-400"
                    />

                  </div>

                  <div>

                    <h2 className="
                      text-3xl
                      font-bold
                    ">

                      Recent Uploads

                    </h2>

                    <p className="
                      text-gray-400
                    ">

                      Your recently uploaded datasets

                    </p>

                  </div>

                </div>

                <button className="
                  px-5
                  py-3
                  rounded-2xl
                  border
                  border-[#1e293b]
                  bg-[#081028]
                  text-lg
                ">

                  View All

                </button>

              </div>

              {/* BODY */}

              <div className="
                h-[300px]
                m-6
                rounded-3xl
                border-2
                border-dashed
                border-violet-500/20
                flex
                flex-col
                items-center
                justify-center
              ">

                <Folder
                  size={70}
                  className="text-violet-500"
                />

                <h2 className="
                  text-3xl
                  font-bold
                  mt-6
                ">

                  No recent uploads

                </h2>

                <p className="
                  text-gray-400
                  text-lg
                  mt-4
                ">

                  Your recently uploaded datasets will appear here

                </p>

              </div>

            </div>

          </div>

          {/* SECURITY */}

          <div className="
            rounded-3xl
            border
            border-green-500/20
            bg-[#071124]
            p-8
            flex
            items-center
            justify-between
          ">

            <div className="
              flex
              items-center
              gap-5
            ">

              <div className="
                w-16
                h-16
                rounded-2xl
                bg-green-500/20
                flex
                items-center
                justify-center
              ">

                <ShieldCheck
                  size={32}
                  className="text-green-400"
                />

              </div>

              <div>

                <h2 className="
                  text-3xl
                  font-bold
                ">

                  Secure & Private

                </h2>

                <p className="
                  text-gray-400
                  text-lg
                  mt-2
                ">

                  Your data is encrypted and secure. We never share your data with third parties.

                </p>

              </div>

            </div>

            <div className="
              w-16
              h-16
              rounded-2xl
              bg-green-500/20
              flex
              items-center
              justify-center
            ">

              <Lock
                size={32}
                className="text-green-400"
              />

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div>

          <div className="
            rounded-3xl
            border
            border-[#1e293b]
            bg-[#071124]
            p-6
          ">

            <div className="
              flex
              items-center
              gap-3
              mb-8
            ">

              <div className="
                w-12
                h-12
                rounded-xl
                bg-violet-500/20
                flex
                items-center
                justify-center
              ">

                <FileUp
                  className="text-violet-400"
                />

              </div>

              <h2 className="
                text-4xl
                font-bold
              ">

                Upload Guidelines

              </h2>

            </div>

            {/* GUIDELINES */}

            <div className="space-y-5">

              {/* CARD */}

              <div className="
                rounded-3xl
                border
                border-[#1e293b]
                bg-[#081028]
                p-5
                flex
                gap-5
              ">

                <div className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-green-500/20
                  flex
                  items-center
                  justify-center
                ">

                  <FileSpreadsheet
                    className="text-green-400"
                  />

                </div>

                <div>

                  <h3 className="
                    text-2xl
                    font-bold
                  ">

                    File Format

                  </h3>

                  <p className="
                    text-gray-400
                    text-lg
                    mt-2
                  ">

                    Upload CSV or Excel files (.csv, .xlsx)

                  </p>

                </div>

              </div>

              {/* CARD */}

              <div className="
                rounded-3xl
                border
                border-[#1e293b]
                bg-[#081028]
                p-5
                flex
                gap-5
              ">

                <div className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-violet-500/20
                  flex
                  items-center
                  justify-center
                ">

                  <BarChart3
                    className="text-violet-400"
                  />

                </div>

                <div>

                  <h3 className="
                    text-2xl
                    font-bold
                  ">

                    Data Structure

                  </h3>

                  <p className="
                    text-gray-400
                    text-lg
                    mt-2
                  ">

                    Ensure your data has proper columns and headers

                  </p>

                </div>

              </div>

              {/* CARD */}

              <div className="
                rounded-3xl
                border
                border-[#1e293b]
                bg-[#081028]
                p-5
                flex
                gap-5
              ">

                <div className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-orange-500/20
                  flex
                  items-center
                  justify-center
                ">

                  <ShieldCheck
                    className="text-orange-400"
                  />

                </div>

                <div>

                  <h3 className="
                    text-2xl
                    font-bold
                  ">

                    Data Quality

                  </h3>

                  <p className="
                    text-gray-400
                    text-lg
                    mt-2
                  ">

                    Clean and validate your data before uploading

                  </p>

                </div>

              </div>

              {/* CARD */}

              <div className="
                rounded-3xl
                border
                border-[#1e293b]
                bg-[#081028]
                p-5
                flex
                gap-5
              ">

                <div className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-blue-500/20
                  flex
                  items-center
                  justify-center
                ">

                  <Info
                    className="text-blue-400"
                  />

                </div>

                <div>

                  <h3 className="
                    text-2xl
                    font-bold
                  ">

                    File Size

                  </h3>

                  <p className="
                    text-gray-400
                    text-lg
                    mt-2
                  ">

                    Maximum file size allowed is 50MB

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}