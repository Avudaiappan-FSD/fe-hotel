import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setEmail,
  setPassword,
  selectName,
  selectEmail,
  selectPassword,
} from "../redux/features/auth/registerslice";
import authServices from "../services/authServices";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleregister = async (e) => {
    e.preventDefault();

    if (!name?.trim() || !email?.trim() || !password) {
      toast.error("Please fill in all the required fields.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must contain at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      const response = await authServices.register({
        name: name.trim(),
        email: email.trim(),
        password,
      });

      if (response.status >= 200 && response.status < 300) {
        toast.success("Welcome! Your account has been created.");

        dispatch(setName(""));
        dispatch(setEmail(""));
        dispatch(setPassword(""));

        navigate("/login", { replace: true });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f4f0] flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT - HOTEL INTRODUCTION */}

        <div className="relative bg-[#102b43] text-white px-8 py-12 sm:px-12 lg:px-14 flex flex-col justify-between min-h-[600px] overflow-hidden">

          {/* Decorative Elements */}

          <div className="absolute -top-24 -right-24 w-80 h-80 border border-[#c9a96e]/20 rounded-full"></div>

          <div className="absolute -bottom-32 -left-24 w-96 h-96 border border-[#c9a96e]/20 rounded-full"></div>

          <div className="relative z-10">

            {/* Logo */}

            <div className="flex items-center gap-3 mb-16">

              <div className="w-14 h-14 rounded-full bg-[#c9a96e] flex items-center justify-center text-3xl">
                🌳
              </div>

              <div>
                <h1 className="text-2xl font-bold tracking-wide">
                  Apple Tree
                </h1>

                <p className="text-[10px] tracking-[5px] text-[#c9a96e] font-semibold">
                  HOTEL & RESORT
                </p>
              </div>

            </div>

            {/* Welcome Content */}

            <p className="text-[#c9a96e] uppercase tracking-[4px] text-xs font-semibold mb-5">
              Experience Exceptional Hospitality
            </p>

            <h2 className="text-4xl sm:text-5xl font-serif leading-tight mb-6">
              Your Journey to
              <span className="block text-[#d5b77e] italic">
                Comfort Begins Here.
              </span>
            </h2>

            <p className="text-gray-300 leading-8 text-sm sm:text-base max-w-md">
              Discover a world of elegance, relaxation and
              personalized hospitality at Apple Tree Hotel & Resort.
              Create your account and unlock a memorable stay
              designed around your comfort.
            </p>

            {/* Hotel Features */}

            <div className="mt-12 space-y-6">

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-xl">
                  ✦
                </div>

                <div>
                  <h3 className="font-semibold">
                    Elegant Accommodation
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Beautifully designed guest rooms.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-xl">
                  ♧
                </div>

                <div>
                  <h3 className="font-semibold">
                    Exceptional Hospitality
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Thoughtful service at every moment.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-xl">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold">
                    Secure Reservations
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Convenient and secure online booking.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Text */}

          <div className="relative z-10 mt-12 pt-6 border-t border-white/10">

            <p className="text-[#d5b77e] text-sm tracking-widest uppercase">
              Comfort · Elegance · Hospitality
            </p>

            <p className="text-gray-400 text-xs mt-2">
              © 2026 Apple Tree Hotel & Resort. All rights reserved.
            </p>

          </div>

        </div>

        {/* RIGHT - REGISTRATION FORM */}

        <div className="px-6 py-12 sm:px-12 lg:px-16 flex flex-col justify-center">

          <div className="max-w-md w-full mx-auto">

            {/* Form Heading */}

            <div className="mb-9">

              <p className="text-[#b08b4f] uppercase tracking-[3px] text-xs font-bold mb-3">
                Become Our Guest
              </p>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#102b43]">
                Create Your Account
              </h2>

              <p className="text-gray-500 mt-3 text-sm leading-6">
                Join Apple Tree and experience a more comfortable
                and convenient way to plan your stay.
              </p>

            </div>

            {/* Registration Form */}

            <form onSubmit={handleregister} className="space-y-5">

              {/* Name */}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  value={name || ""}
                  onChange={(e) => dispatch(setName(e.target.value))}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none text-gray-800 placeholder-gray-400 transition duration-300 focus:bg-white focus:border-[#b08b4f] focus:ring-4 focus:ring-[#b08b4f]/10"
                />
              </div>

              {/* Email */}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  autoComplete="email"
                  required
                  value={email || ""}
                  onChange={(e) => dispatch(setEmail(e.target.value))}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none text-gray-800 placeholder-gray-400 transition duration-300 focus:bg-white focus:border-[#b08b4f] focus:ring-4 focus:ring-[#b08b4f]/10"
                />
              </div>

              {/* Password */}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>

                <div className="relative">

                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a secure password"
                    autoComplete="new-password"
                    required
                    minLength={6}
                    value={password || ""}
                    onChange={(e) => dispatch(setPassword(e.target.value))}
                    className="w-full px-5 py-4 pr-20 bg-gray-50 border border-gray-200 rounded-xl outline-none text-gray-800 placeholder-gray-400 transition duration-300 focus:bg-white focus:border-[#b08b4f] focus:ring-4 focus:ring-[#b08b4f]/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#b08b4f] hover:text-[#102b43]"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>

                <p className="text-xs text-gray-400 mt-2">
                  Use at least 6 characters for your password.
                </p>
              </div>

              {/* Submit Button */}

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 bg-[#102b43] hover:bg-[#1b405e] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg shadow-[#102b43]/20 transition duration-300 hover:-translate-y-0.5"
              >
                {loading ? "Creating Account..." : "Create My Account →"}
              </button>

            </form>

            {/* Login Link */}

            <div className="mt-8 text-center">

              <p className="text-gray-500 text-sm">
                Already have an account?

                <Link
                  to="/login"
                  className="ml-2 font-bold text-[#b08b4f] hover:text-[#102b43] transition"
                >
                  Sign In
                </Link>
              </p>

            </div>

            {/* Security Information */}

            <div className="mt-10 pt-6 border-t border-gray-100">

              <div className="flex justify-center items-center gap-2 text-gray-400 text-xs">
                <span>🔒</span>
                <span>Your account information is handled securely.</span>
              </div>

              <p className="text-center text-gray-400 text-xs mt-4 tracking-wider">
                APPLE TREE HOTEL & RESORT
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Register;