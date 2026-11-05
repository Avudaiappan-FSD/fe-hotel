import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import edit from "../assets/images/edit.png";
import userService from "../services/userServices";

const Profile = () => {
    const loaderdata = useLoaderData();
    const navigate = useNavigate();

    const [me, setMe] = useState(loaderdata);
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState(loaderdata?.user?.name || "");
    const [email, setEmail] = useState(loaderdata?.user?.email || "");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const user = me?.user;

    const handleUpdate = async (e) => {
        e.preventDefault();

        setLoading(true);
        setMessage("");
        setError("");

        try {
            await userService.updateprofile({ name, email });

            setMe((prev) => ({
                ...prev,
                user: {
                    ...prev.user,
                    name,
                    email,
                },
            }));

            setIsEdit(false);
            setMessage("Your profile has been updated successfully.");
        } catch (err) {
            console.error("Profile update error:", err);
            setError(
                err.response?.data?.message ||
                "Unable to update your profile. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        setName(user?.name || "");
        setEmail(user?.email || "");
        setIsEdit(false);
        setError("");
        setMessage("");
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <p className="text-gray-600 text-lg">Profile information not available.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f5f6f8]">

            {/* Welcome Banner */}
            <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-800 to-amber-900 text-white">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-20 -right-10 h-72 w-72 rounded-full border-[35px] border-white"></div>
                    <div className="absolute -bottom-32 left-20 h-80 w-80 rounded-full border-[35px] border-white"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
                    <p className="text-amber-300 uppercase tracking-[0.3em] text-xs md:text-sm font-semibold">
                        Apple Tree Hotel
                    </p>

                    <h1 className="text-3xl md:text-5xl font-bold mt-4">
                        Welcome Back, {user.name}
                    </h1>

                    <p className="text-gray-200 mt-4 max-w-2xl leading-7">
                        Your comfort is our priority. Manage your personal information,
                        explore your bookings, and enjoy a seamless hospitality experience
                        with Apple Tree Hotel.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-7">
                        <button
                            onClick={() => navigate("/roomlist")}
                            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition duration-300"
                        >
                            Explore Rooms
                        </button>

                        {user.role === "customer" && (
                            <button
                                onClick={() => navigate(`/MyBookings/${user._id}`)}
                                className="border border-white/60 hover:bg-white hover:text-slate-900 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
                            >
                                My Bookings
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Main Profile Section */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Profile Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 text-center">

                            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-slate-800 to-amber-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                                {user.name?.charAt(0)?.toUpperCase()}
                            </div>

                            <h2 className="text-2xl font-bold text-gray-800 mt-5">
                                {user.name}
                            </h2>

                            <p className="text-gray-500 text-sm mt-2 break-all">
                                {user.email}
                            </p>

                            <span className="inline-block mt-4 bg-amber-50 text-amber-800 border border-amber-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                                {user.role}
                            </span>

                            <div className="border-t border-gray-100 mt-7 pt-6 text-left">
                                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                                    Account Information
                                </p>

                                <div className="mt-4 space-y-4">
                                    <div>
                                        <p className="text-xs text-gray-400">Full Name</p>
                                        <p className="text-gray-800 font-medium mt-1">
                                            {user.name}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-400">Email Address</p>
                                        <p className="text-gray-800 font-medium mt-1 break-all">
                                            {user.email}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-400">Account Type</p>
                                        <p className="text-gray-800 font-medium mt-1 capitalize">
                                            {user.role}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    setIsEdit(true);
                                    setMessage("");
                                    setError("");
                                }}
                                className="w-full mt-7 bg-slate-900 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition duration-300"
                            >
                                Edit Profile
                            </button>

                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Edit Profile */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">

                            <div className="flex items-center justify-between gap-4 mb-6">
                                <div>
                                    <p className="text-amber-600 text-xs font-bold uppercase tracking-widest">
                                        Personal Settings
                                    </p>

                                    <h2 className="text-2xl font-bold text-gray-800 mt-1">
                                        Profile Details
                                    </h2>
                                </div>

                                <img
                                    src={edit}
                                    alt="Edit profile"
                                    className="w-8 h-8 object-contain"
                                />
                            </div>

                            {message && (
                                <div className="mb-5 bg-green-50 border border-green-200 text-green-700 rounded-lg p-3 text-sm">
                                    {message}
                                </div>
                            )}

                            {error && (
                                <div className="mb-5 bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 text-sm">
                                    {error}
                                </div>
                            )}

                            {isEdit ? (
                                <form onSubmit={handleUpdate} className="space-y-5">

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                                            placeholder="Enter your email address"
                                        />
                                    </div>

                                    <div className="flex flex-wrap gap-3 pt-2">
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="bg-slate-900 hover:bg-amber-600 disabled:opacity-60 text-white font-semibold px-7 py-3 rounded-lg transition duration-300"
                                        >
                                            {loading ? "Saving..." : "Save Changes"}
                                        </button>

                                        <button
                                            type="button"
                                            onClick={handleCancel}
                                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-7 py-3 rounded-lg transition duration-300"
                                        >
                                            Cancel
                                        </button>
                                    </div>

                                </form>
                            ) : (
                                <div className="space-y-5">

                                    <div className="bg-gray-50 rounded-xl p-5">
                                        <p className="text-sm text-gray-400">Full Name</p>
                                        <p className="text-gray-800 font-semibold mt-2">
                                            {user.name}
                                        </p>
                                    </div>

                                    <div className="bg-gray-50 rounded-xl p-5">
                                        <p className="text-sm text-gray-400">Email Address</p>
                                        <p className="text-gray-800 font-semibold mt-2 break-all">
                                            {user.email}
                                        </p>
                                    </div>

                                    <p className="text-sm text-gray-500 leading-6">
                                        Keep your account information up to date to make your
                                        reservations and hotel services easier to manage.
                                    </p>

                                </div>
                            )}
                        </div>

                        {/* Hotel Information */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">

                            <p className="text-amber-600 text-xs font-bold uppercase tracking-widest">
                                Experience Hospitality
                            </p>

                            <h2 className="text-2xl font-bold text-gray-800 mt-2">
                                Discover Apple Tree Hotel
                            </h2>

                            <p className="text-gray-500 mt-4 leading-7">
                                Welcome to Apple Tree Hotel, where comfort meets convenience.
                                We are committed to providing a pleasant and memorable stay
                                with thoughtfully designed rooms, welcoming hospitality, and
                                convenient services for every guest.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">

                                <div className="bg-[#faf8f3] rounded-xl p-5">
                                    <div className="text-2xl">🛏️</div>
                                    <h3 className="font-bold text-gray-800 mt-3">
                                        Comfortable Rooms
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-2 leading-6">
                                        Relax in comfortable spaces designed for a refreshing stay.
                                    </p>
                                </div>

                                <div className="bg-[#faf8f3] rounded-xl p-5">
                                    <div className="text-2xl">✨</div>
                                    <h3 className="font-bold text-gray-800 mt-3">
                                        Quality Hospitality
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-2 leading-6">
                                        Enjoy friendly service and a guest-focused experience.
                                    </p>
                                </div>

                                <div className="bg-[#faf8f3] rounded-xl p-5">
                                    <div className="text-2xl">📅</div>
                                    <h3 className="font-bold text-gray-800 mt-3">
                                        Easy Reservations
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-2 leading-6">
                                        Explore rooms and manage your reservations conveniently.
                                    </p>
                                </div>

                                <div className="bg-[#faf8f3] rounded-xl p-5">
                                    <div className="text-2xl">🤝</div>
                                    <h3 className="font-bold text-gray-800 mt-3">
                                        Guest First
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-2 leading-6">
                                        Your comfort and satisfaction remain our priority.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white">

                            <p className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                                Quick Access
                            </p>

                            <h2 className="text-2xl font-bold mt-2">
                                Manage Your Hotel Experience
                            </h2>

                            <p className="text-gray-300 mt-3 leading-6">
                                Find your next comfortable stay or access the services
                                available through your account.
                            </p>

                            <div className="flex flex-wrap gap-3 mt-6">

                                <button
                                    onClick={() => navigate("/roomlist")}
                                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition"
                                >
                                    Browse Rooms
                                </button>

                                {user.role === "customer" && (
                                    <button
                                        onClick={() => navigate(`/MyBookings/${user._id}`)}
                                        className="border border-gray-500 hover:bg-white hover:text-slate-900 font-semibold px-6 py-3 rounded-lg transition"
                                    >
                                        My Bookings
                                    </button>
                                )}

                                {(user.role === "admin" || user.role === "receptionist") && (
                                    <button
                                        onClick={() => navigate("/Adminroom")}
                                        className="border border-gray-500 hover:bg-white hover:text-slate-900 font-semibold px-6 py-3 rounded-lg transition"
                                    >
                                        Manage Rooms
                                    </button>
                                )}

                            </div>
                        </div>

                    </div>
                </div>
            </main>

            {/* Contact Section */}
            <section className="bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-10">

                    <div className="text-center">
                        <p className="text-amber-600 text-xs font-bold uppercase tracking-widest">
                            We Are Here To Help
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-2">
                            Contact Apple Tree Hotel
                        </h2>

                        <p className="text-gray-500 mt-3 max-w-xl mx-auto leading-6">
                            Have a question about your stay or need assistance?
                            Get in touch with our team.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto mt-8">

                        <div className="text-center bg-gray-50 rounded-xl p-5">
                            <p className="text-2xl">📞</p>
                            <h3 className="font-bold text-gray-800 mt-2">Call Us</h3>
                            <p className="text-gray-500 text-sm mt-2">
                                0462 - 9887634211
                            </p>
                        </div>

                        <div className="text-center bg-gray-50 rounded-xl p-5">
                            <p className="text-2xl">✉️</p>
                            <h3 className="font-bold text-gray-800 mt-2">Email Us</h3>
                            <p className="text-gray-500 text-sm mt-2 break-all">
                                info@appletree.com
                            </p>
                        </div>

                    </div>

                    <p className="text-center text-gray-400 text-xs mt-10">
                        © 2026 Apple Tree Hotel. All rights reserved.
                        Designed for a comfortable and memorable stay.
                    </p>

                </div>
            </section>

        </div>
    );
};

export default Profile;