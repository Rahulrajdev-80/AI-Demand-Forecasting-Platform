import { useState } from "react";

import {
  useNavigate,
  Link
} from "react-router-dom";

import { motion } from "framer-motion";

import {
  BrainCircuit,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

import API from "../api/api";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    username: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {

    e.preventDefault();

    setLoading(true);

    setMessage("");

    try {

      const response = await API.post(
        "/register",
        formData
      );

      setMessage(
        "Registration Successful"
      );

      setTimeout(() => {

        navigate("/login");

      }, 1500);

    }

    catch (error) {

      setMessage(

        error.response?.data?.detail
        || "Registration Failed"
      );
    }

    finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-[#020617] text-white flex">

      {/* LEFT SIDE */}

      <div className="
        hidden
        lg:flex
        w-1/2
        flex-col
        justify-center
        px-20
        bg-gradient-to-br
        from-violet-700
        via-blue-700
        to-[#020617]
      ">

        <motion.div

          initial={{
            opacity: 0,
            x: -50
          }}

          animate={{
            opacity: 1,
            x: 0
          }}

          transition={{
            duration: 0.7
          }}
        >

          <div className="flex items-center gap-4 mb-10">

            <BrainCircuit size={55} />

            <h1 className="text-5xl font-bold">

              AI Forecast

            </h1>

          </div>

          <p className="
            text-xl
            text-violet-100
            leading-relaxed
            mb-14
          ">

            Create your account and unlock powerful
            AI-driven forecasting analytics platform.

          </p>

          <div className="space-y-7">

            <div className="flex items-center gap-4">

              <TrendingUp size={28} />

              <span className="text-lg">

                AI Revenue Prediction

              </span>

            </div>

            <div className="flex items-center gap-4">

              <BrainCircuit size={28} />

              <span className="text-lg">

                Prophet Forecasting Models

              </span>

            </div>

            <div className="flex items-center gap-4">

              <ShieldCheck size={28} />

              <span className="text-lg">

                Secure Cloud Architecture

              </span>

            </div>

          </div>

        </motion.div>

      </div>

      {/* RIGHT SIDE */}

      <div className="
        flex-1
        flex
        items-center
        justify-center
        p-8
      ">

        <motion.div

          initial={{
            opacity: 0,
            y: 40
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.6
          }}

          className="
            w-full
            max-w-md
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-10
            shadow-2xl
          "
        >

          <h2 className="
            text-4xl
            font-bold
            mb-3
          ">

            Create Account

          </h2>

          <p className="
            text-slate-300
            mb-8
          ">

            Start using AI forecasting today

          </p>

          <form
            onSubmit={handleRegister}
            className="space-y-6"
          >

            {/* USERNAME */}

            <div>

              <label className="
                block
                mb-2
                text-sm
                text-slate-300
              ">

                Username

              </label>

              <input
                type="text"
                name="username"
                placeholder="Enter username"
                onChange={handleChange}
                required
                className="
                  w-full
                  bg-[#111827]
                  border
                  border-slate-700
                  rounded-2xl
                  px-5
                  py-4
                  outline-none
                  focus:ring-2
                  focus:ring-violet-500
                "
              />

            </div>

            {/* EMAIL */}

            <div>

              <label className="
                block
                mb-2
                text-sm
                text-slate-300
              ">

                Email Address

              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
                required
                className="
                  w-full
                  bg-[#111827]
                  border
                  border-slate-700
                  rounded-2xl
                  px-5
                  py-4
                  outline-none
                  focus:ring-2
                  focus:ring-violet-500
                "
              />

            </div>

            {/* PASSWORD */}

            <div>

              <label className="
                block
                mb-2
                text-sm
                text-slate-300
              ">

                Password

              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
                required
                className="
                  w-full
                  bg-[#111827]
                  border
                  border-slate-700
                  rounded-2xl
                  px-5
                  py-4
                  outline-none
                  focus:ring-2
                  focus:ring-violet-500
                "
              />

            </div>

            {/* MESSAGE */}

            {
              message && (

                <p className="
                  text-center
                  text-sm
                  text-green-400
                ">

                  {message}

                </p>
              )
            }

            {/* BUTTON */}

            <button
              type="submit"
              className="
                w-full
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-violet-600
                to-blue-600
                font-bold
                text-lg
                hover:scale-105
                transition
              "
            >

              {
                loading
                  ? "Creating Account..."
                  : "Register"
              }

            </button>

          </form>

          {/* LOGIN LINK */}

          <p className="
            text-center
            mt-8
            text-slate-400
          ">

            Already have an account?

            {" "}

            <Link
              to="/login"
              className="
                text-violet-400
                font-semibold
                hover:underline
              "
            >

              Login

            </Link>

          </p>

        </motion.div>

      </div>

    </div>
  );
}

export default Register;