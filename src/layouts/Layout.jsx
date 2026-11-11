import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/auth/userslice";

import userimage from "../assets/images/user.png";
import tree from "../assets/images/tree.png";

import phone from "../assets/images/phone-contact.png";
import insta from "../assets/images/instagram.png";
import fb from "../assets/images/facebook.png";
import twitter from "../assets/images/logos.png";
import pinterest from "../assets/images/pinterest.png";
import youtube from "../assets/images/youtube.png";

const Layout = ({ children }) => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);

    return (
        <div className="min-h-screen flex flex-col bg-[#F8F7F4]">

            {/* ================= NAVBAR ================= */}

            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">

                <nav className="max-w-7xl mx-auto px-5 lg:px-10">

                    <div className="h-20 flex items-center justify-between">

                        {/* HOTEL LOGO */}

                        <div
                            onClick={() => navigate("/")}
                            className="flex items-center gap-3 cursor-pointer"
                        >
                            <img
                                src={tree}
                                alt="Apple Tree Logo"
                                className="w-11 h-11 object-contain"
                            />

                            <div>
                                <h1 className="text-2xl font-bold tracking-wide text-[#18352F]">
                                    Apple Tree
                                </h1>

                                <p className="text-[10px] tracking-[4px] font-semibold text-[#A58B5C] uppercase">
                                    Hotel & Resort
                                </p>
                            </div>
                        </div>

                        {/* NAVIGATION BUTTONS */}

                        <div className="flex items-center gap-3">

                            {!user ? (
                                <>
                                    <button
                                        onClick={() => navigate("/register")}
                                        className="hidden sm:block px-6 py-2.5 rounded-lg border border-[#18352F] text-[#18352F] font-semibold hover:bg-[#18352F] hover:text-white transition duration-300"
                                    >
                                        Register
                                    </button>

                                    <button
                                        onClick={() => navigate("/login")}
                                        className="px-6 py-2.5 rounded-lg bg-[#18352F] text-white font-semibold hover:bg-[#A58B5C] transition duration-300 shadow-sm"
                                    >
                                        Login
                                    </button>
                                </>
                            ) : (
                                <div className="flex items-center gap-3">

                                    <button
                                        onClick={() => navigate("/logout")}
                                        className="px-4 sm:px-6 py-2.5 rounded-lg bg-[#18352F] text-white font-semibold hover:bg-[#A58B5C] transition duration-300"
                                    >
                                        Logout
                                    </button>

                                    <button
                                        onClick={() => navigate("/Profile")}
                                        className="rounded-full border-2 border-[#A58B5C] p-1 hover:shadow-lg transition duration-300"
                                        aria-label="Open Profile"
                                    >
                                        <img
                                            src={userimage}
                                            alt="User Profile"
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                    </button>

                                </div>
                            )}

                        </div>

                    </div>

                </nav>

                {/* BRAND STRIP */}

                <div className="h-1 bg-gradient-to-r from-[#18352F] via-[#C5A46D] to-[#18352F]"></div>

            </header>


            {/* ================= MAIN CONTENT ================= */}

            <main className="flex-grow w-full">
                {children}
            </main>


            {/* ================= PREMIUM FOOTER ================= */}

            <footer className="mt-auto bg-[#142D29] text-white">

                {/* Footer Main Content */}

                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                        {/* HOTEL ABOUT */}

                        <div>

                            <div className="flex items-center gap-3 mb-5">

                                <img
                                    src={tree}
                                    alt="Apple Tree"
                                    className="w-12 h-12 object-contain"
                                />

                                <div>
                                    <h2 className="text-2xl font-bold tracking-wide">
                                        Apple Tree
                                    </h2>

                                    <p className="text-xs tracking-[3px] text-[#C5A46D]">
                                        HOTEL & RESORT
                                    </p>
                                </div>

                            </div>

                            <p className="text-gray-300 text-sm leading-7">
                                Experience exceptional hospitality at Apple Tree
                                Hotel. Discover elegant accommodation, thoughtfully
                                designed spaces and warm service that makes
                                every stay memorable.
                            </p>

                        </div>


                        {/* QUICK LINKS */}

                        <div>

                            <h3 className="text-lg font-bold mb-6 text-[#D4B77E]">
                                Quick Links
                            </h3>

                            <ul className="space-y-4 text-sm text-gray-300">

                                <li>
                                    <button
                                        onClick={() => navigate("/")}
                                        className="hover:text-[#D4B77E] transition"
                                    >
                                        Home
                                    </button>
                                </li>

                                <li>
                                    <button
                                        onClick={() => navigate("/roomlist")}
                                        className="hover:text-[#D4B77E] transition"
                                    >
                                        Explore Rooms
                                    </button>
                                </li>

                                <li>
                                    <button
                                        onClick={() => navigate("/Profile")}
                                        className="hover:text-[#D4B77E] transition"
                                    >
                                        My Profile
                                    </button>
                                </li>

                                <li>
                                    <button
                                        onClick={() => navigate("/register")}
                                        className="hover:text-[#D4B77E] transition"
                                    >
                                        Create Account
                                    </button>
                                </li>

                            </ul>

                        </div>


                        {/* HOTEL SERVICES */}

                        <div>

                            <h3 className="text-lg font-bold mb-6 text-[#D4B77E]">
                                Our Experience
                            </h3>

                            <ul className="space-y-4 text-sm text-gray-300">

                                <li>Elegant Accommodation</li>
                                <li>Comfortable Guest Rooms</li>
                                <li>Easy Online Reservations</li>
                                <li>Secure Online Payments</li>
                                <li>Exceptional Hospitality</li>

                            </ul>

                        </div>


                        {/* CONTACT & SOCIAL */}

                        <div>

                            <h3 className="text-lg font-bold mb-6 text-[#D4B77E]">
                                Connect With Us
                            </h3>

                            <div className="flex items-center gap-3 mb-5">

                                <img
                                    src={phone}
                                    alt="Contact"
                                    className="w-6 h-6 object-contain"
                                />

                                <p className="text-sm text-gray-300">
                                    Contact Apple Tree Hotel
                                </p>

                            </div>

                            <p className="text-sm text-gray-300 leading-6 mb-6">
                                We are committed to making your stay
                                comfortable, convenient and memorable.
                            </p>


                            {/* SOCIAL MEDIA */}

                            <div className="flex items-center gap-3">

                                {[
                                    { img: insta, name: "Instagram" },
                                    { img: fb, name: "Facebook" },
                                    { img: twitter, name: "Twitter" },
                                    { img: pinterest, name: "Pinterest" },
                                    { img: youtube, name: "YouTube" }
                                ].map((social, index) => (

                                    <div
                                        key={index}
                                        title={social.name}
                                        className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#C5A46D] transition duration-300 cursor-default"
                                    >
                                        <img
                                            src={social.img}
                                            alt={social.name}
                                            className="w-5 h-5 object-contain"
                                        />
                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>


                {/* COPYRIGHT */}

                <div className="border-t border-white/10">

                    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">

                        <p className="text-sm text-gray-400 text-center">
                            © {new Date().getFullYear()} Apple Tree Hotel & Resort.
                            All Rights Reserved.
                        </p>

                        <p className="text-sm text-[#C5A46D] tracking-wide">
                            Comfort • Elegance • Hospitality
                        </p>

                    </div>

                </div>

            </footer>

        </div>
    );
};

export default Layout;