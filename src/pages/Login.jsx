import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  setEmail,
  setPassword,
  selectEmail,
  selectPassword
} from "../redux/features/auth/loginslice";

import { setUser } from "../redux/features/auth/userslice";

import authServices from "../services/authServices";

import { useNavigate } from "react-router-dom";


const Login = () => {

  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {

      setLoading(true);

      const loginResponse = await authServices.login({
        email,
        password
      });

      if (loginResponse.status === 200) {

        const userResponse = await authServices.me();

        dispatch(setUser(userResponse.data));

        dispatch(setEmail(""));
        dispatch(setPassword(""));

        navigate("/roomlist", { replace: true });

      }

    } catch (error) {

      setError(
        error.response?.data?.message ||
        "Login failed. Please check your credentials and try again."
      );

    } finally {

      setLoading(false);

    }
  };


  return (

    <div className="min-h-[75vh] bg-[#F7F6F2] px-4 py-12 sm:px-6 lg:px-10 flex items-center justify-center">

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">


        {/* ================= LEFT SIDE ================= */}

        <div className="relative bg-[#18352F] text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between overflow-hidden">

          {/* Decorative Background */}

          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full border border-[#C5A46D]/20"></div>

          <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full border border-[#C5A46D]/20"></div>

          <div className="absolute top-20 right-10 w-40 h-40 bg-[#C5A46D]/10 rounded-full blur-3xl"></div>


          <div className="relative z-10">

            {/* Branding */}

            <p className="text-[#D5B77E] tracking-[5px] text-xs font-bold uppercase mb-8">
              Apple Tree Hotel & Resort
            </p>


            <div className="mb-8">

              <p className="text-[#C5A46D] text-sm tracking-[4px] uppercase mb-5">
                Welcome Back
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight font-semibold">

                Your Escape.

                <br />

                <span className="italic text-[#D7BD8D]">
                  Your Experience.
                </span>

              </h1>

            </div>


            <p className="text-gray-300 text-base leading-8 max-w-md">

              Discover a world of comfort, elegance and
              exceptional hospitality. At Apple Tree,
              every stay is an opportunity to relax,
              recharge and create beautiful memories.

            </p>

          </div>


          {/* HOTEL HIGHLIGHTS */}

          <div className="relative z-10 mt-12">

            <div className="h-px bg-white/20 mb-8"></div>

            <h3 className="text-lg font-semibold mb-6 text-[#D5B77E]">
              Experience the Apple Tree Difference
            </h3>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="flex items-start gap-3">

                <span className="text-2xl text-[#D5B77E]">
                  ✦
                </span>

                <div>
                  <h4 className="font-semibold text-sm">
                    Elegant Comfort
                  </h4>

                  <p className="text-gray-400 text-xs mt-1 leading-5">
                    Thoughtfully designed rooms for a relaxing stay.
                  </p>
                </div>

              </div>


              <div className="flex items-start gap-3">

                <span className="text-2xl text-[#D5B77E]">
                  ✧
                </span>

                <div>
                  <h4 className="font-semibold text-sm">
                    Easy Reservations
                  </h4>

                  <p className="text-gray-400 text-xs mt-1 leading-5">
                    Explore rooms and reserve with ease.
                  </p>
                </div>

              </div>


              <div className="flex items-start gap-3">

                <span className="text-2xl text-[#D5B77E]">
                  ◈
                </span>

                <div>
                  <h4 className="font-semibold text-sm">
                    Secure Payments
                  </h4>

                  <p className="text-gray-400 text-xs mt-1 leading-5">
                    Convenient online payment experience.
                  </p>
                </div>

              </div>


              <div className="flex items-start gap-3">

                <span className="text-2xl text-[#D5B77E]">
                  ❖
                </span>

                <div>
                  <h4 className="font-semibold text-sm">
                    Guest Experience
                  </h4>

                  <p className="text-gray-400 text-xs mt-1 leading-5">
                    Comfort and convenience at every step.
                  </p>
                </div>

              </div>

            </div>

          </div>


          <p className="relative z-10 text-xs text-gray-400 mt-10 tracking-widest uppercase">
            Comfort • Elegance • Hospitality
          </p>

        </div>



        {/* ================= RIGHT SIDE ================= */}

        <div className="p-7 sm:p-12 lg:p-16 flex flex-col justify-center">

          <div className="max-w-md mx-auto w-full">


            {/* FORM HEADER */}

            <div className="mb-9">

              <p className="text-[#A58B5C] uppercase tracking-[4px] text-xs font-bold mb-4">
                Member Access
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#18352F]">
                Sign In
              </h2>

              <p className="text-gray-500 mt-3 leading-7 text-sm">
                Welcome back! Sign in to access your
                account and explore your hotel experience.
              </p>

            </div>



            {/* LOGIN FORM */}

            <form
              onSubmit={handleLogin}
              className="space-y-6"
            >

              {/* EMAIL */}

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => {
                    dispatch(setEmail(e.target.value));
                    setError("");
                  }}
                  required
                  autoComplete="email"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-[#FAFAF8] text-gray-800 outline-none transition duration-300 focus:border-[#A58B5C] focus:ring-4 focus:ring-[#A58B5C]/10"
                />

              </div>



              {/* PASSWORD */}

              <div>

                <div className="flex justify-between items-center mb-2">

                  <label className="text-sm font-semibold text-gray-700">
                    Password
                  </label>

                </div>


                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                      dispatch(setPassword(e.target.value));
                      setError("");
                    }}
                    required
                    autoComplete="current-password"
                    className="w-full px-5 py-4 pr-20 rounded-xl border border-gray-200 bg-[#FAFAF8] text-gray-800 outline-none transition duration-300 focus:border-[#A58B5C] focus:ring-4 focus:ring-[#A58B5C]/10"
                  />


                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#A58B5C] hover:text-[#18352F]"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>

              </div>



              {/* ERROR MESSAGE */}

              {error && (

                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
                  {error}
                </div>

              )}



              {/* LOGIN BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-[#18352F] text-white font-bold tracking-wide shadow-lg hover:bg-[#A58B5C] hover:shadow-xl transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >

                {loading ? "Signing In..." : "Sign In to Your Account"}

              </button>

            </form>



            {/* REGISTER LINK */}

            <div className="mt-8 text-center">

              <p className="text-gray-500 text-sm">
                Don't have an account?
              </p>

              <button
                onClick={() => navigate("/register")}
                className="mt-2 text-[#A58B5C] font-bold hover:text-[#18352F] transition duration-300"
              >
                Create Your Account →
              </button>

            </div>



            {/* SECURITY MESSAGE */}

            <div className="mt-10 pt-6 border-t border-gray-100">

              <div className="flex items-center justify-center gap-2 text-gray-400">

                <span className="text-[#A58B5C]">
                  🔒
                </span>

                <p className="text-xs text-center">
                  Your account access is protected.
                </p>

              </div>

            </div>


          </div>

        </div>

      </div>

    </div>

  );

};


export default Login;