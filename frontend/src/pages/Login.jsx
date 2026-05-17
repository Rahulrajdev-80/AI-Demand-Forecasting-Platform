import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../api/api";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Brain,
  BarChart3,
  Shield,
  Zap,
} from "lucide-react";

export default function Login() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({

    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      // CREATE FORM DATA
      const loginData = new URLSearchParams();

      loginData.append(
        "username",
        formData.email
      );

      loginData.append(
        "password",
        formData.password
      );

      // LOGIN API CALL
      const response = await API.post(
        "/auth/login",
        loginData,
        {
          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded",
          },
        }
      );

      // SAVE TOKEN
      localStorage.setItem(
        "token",
        response.data.access_token
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert(
        "Invalid Email or Password"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="h-screen overflow-hidden flex bg-[#030712] text-white">

      {/* LEFT SIDE */}

      <div className="
        hidden
        lg:flex
        w-1/2
        bg-gradient-to-br
        from-blue-700
        via-indigo-700
        to-purple-900
        p-10
        flex-col
        justify-between
      ">

        {/* LOGO */}

        <div className="flex items-center gap-4">

          <div className="
            w-16
            h-16
            rounded-2xl
            bg-white/10
            backdrop-blur-lg
            flex
            items-center
            justify-center
          ">

            <Brain size={34} className="text-pink-400" />

          </div>

          <div>

            <h1 className="text-5xl font-bold">

              AI Forecast

            </h1>

            <p className="text-lg text-gray-200">

              Smart Demand Intelligence

            </p>

          </div>

        </div>

        {/* HERO TEXT */}

        <div className="space-y-6">

          <h1 className="
            text-5xl
            xl:text-6xl
            font-extrabold
            leading-tight
          ">

            AI-Powered <br />

            <span className="
              bg-gradient-to-r
              from-pink-300
              to-pink-500
              bg-clip-text
              text-transparent
            ">

              Demand

            </span>

            <br />

            <span className="
              bg-gradient-to-r
              from-purple-300
              to-pink-500
              bg-clip-text
              text-transparent
            ">

              Forecasting

            </span>

          </h1>

          <p className="
            text-xl
            text-gray-200
            max-w-xl
            leading-relaxed
          ">

            Advanced machine learning models and
            real-time analytics for accurate demand
            predictions and business insights.

          </p>

        </div>

        {/* FEATURES */}

        <div className="space-y-5">

          <div className="flex items-center gap-4">

            <div className="
              w-14
              h-14
              rounded-full
              bg-pink-500/20
              flex
              items-center
              justify-center
            ">

              <BarChart3 className="text-pink-400" />

            </div>

            <div>

              <h3 className="text-2xl font-semibold">

                Smart Predictions

              </h3>

              <p className="text-gray-300">

                AI models for accurate demand forecasting

              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <div className="
              w-14
              h-14
              rounded-full
              bg-blue-500/20
              flex
              items-center
              justify-center
            ">

              <Shield className="text-blue-400" />

            </div>

            <div>

              <h3 className="text-2xl font-semibold">

                Secure & Private

              </h3>

              <p className="text-gray-300">

                Enterprise-grade data protection

              </p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <div className="
              w-14
              h-14
              rounded-full
              bg-purple-500/20
              flex
              items-center
              justify-center
            ">

              <Zap className="text-purple-400" />

            </div>

            <div>

              <h3 className="text-2xl font-semibold">

                Real-Time Insights

              </h3>

              <p className="text-gray-300">

                Instant analytics and forecasting reports

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="
        flex-1
        flex
        items-center
        justify-center
        overflow-y-auto
        p-6
      ">

        <div className="
          w-full
          max-w-xl
          bg-[#07122B]
          border
          border-white/10
          rounded-[40px]
          p-10
          shadow-2xl
        ">

          {/* TITLE */}

          <div className="text-center mb-10">

            <h1 className="
              text-4xl
              font-bold
              mb-3
            ">

              Welcome Back

            </h1>

            <p className="
              text-gray-400
              text-lg
            ">

              Login to continue to your dashboard

            </p>

          </div>

          {/* FORM */}

          <form
            onSubmit={handleLogin}
            className="space-y-7"
          >

            {/* EMAIL */}

            <div>

              <label className="
                block
                mb-3
                text-lg
                font-medium
              ">

                Email Address

              </label>

              <div className="
                flex
                items-center
                bg-[#0B1736]
                border
                border-white/10
                rounded-2xl
                px-5
                py-4
              ">

                <Mail
                  className="text-gray-400 mr-4"
                  size={22}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  className="
                    bg-transparent
                    outline-none
                    w-full
                    text-lg
                  "
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div>

              <label className="
                block
                mb-3
                text-lg
                font-medium
              ">

                Password

              </label>

              <div className="
                flex
                items-center
                bg-[#0B1736]
                border
                border-white/10
                rounded-2xl
                px-5
                py-4
              ">

                <Lock
                  className="text-gray-400 mr-4"
                  size={22}
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  className="
                    bg-transparent
                    outline-none
                    w-full
                    text-lg
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >

                  {
                    showPassword
                      ? (
                        <EyeOff className="text-gray-400" />
                      )
                      : (
                        <Eye className="text-gray-400" />
                      )
                  }

                </button>

              </div>

            </div>

            {/* OPTIONS */}

            <div className="
              flex
              items-center
              justify-between
              text-gray-300
            ">

              <label className="
                flex
                items-center
                gap-3
              ">

                <input
                  type="checkbox"
                  className="w-5 h-5"
                />

                Remember me

              </label>

              <button
                type="button"
                className="
                  text-purple-400
                  hover:text-purple-300
                "
              >

                Forgot password?

              </button>

            </div>

            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="
                w-full
                py-4
                rounded-2xl
                text-xl
                font-semibold
                bg-gradient-to-r
                from-purple-600
                to-blue-600
                hover:scale-[1.01]
                transition-all
                duration-300
              "
            >

              {
                loading
                  ? "Logging In..."
                  : "Login"
              }

            </button>

            {/* DIVIDER */}

            <div className="
              flex
              items-center
              gap-4
            ">

              <div className="
                flex-1
                h-[1px]
                bg-white/10
              "></div>

              <span className="text-gray-400">

                OR

              </span>

              <div className="
                flex-1
                h-[1px]
                bg-white/10
              "></div>

            </div>

            {/* GOOGLE BUTTON */}

            <button
              type="button"
              className="
                w-full
                py-4
                rounded-2xl
                border
                border-white/10
                bg-[#0B1736]
                hover:bg-[#122044]
                transition-all
                duration-300
                text-lg
              "
            >

              Continue with Google

            </button>

          </form>

          {/* REGISTER LINK */}

          <p className="
            mt-8
            text-center
            text-gray-400
          ">

            Don't have account?

            <span
              onClick={() =>
                navigate("/register")
              }
              className="
                text-violet-400
                cursor-pointer
                ml-2
                font-semibold
              "
            >

              Register

            </span>

          </p>

        </div>

      </div>

    </div>
  );
}