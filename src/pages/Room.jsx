import { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import bookingServices from "../services/bookingServices";

import room1 from "../assets/room images/images (1).jpeg";
import room2 from "../assets/room images/images (2).jpeg";
import room3 from "../assets/room images/images (3).jpeg";
import room4 from "../assets/room images/images (4).jpeg";
import room5 from "../assets/room images/images (5).jpeg";
import room7 from "../assets/room images/images (7).jpg";
import room8 from "../assets/room images/images (8).jpeg";
import room9 from "../assets/room images/images (9).jpeg";
import room10 from "../assets/room images/images (10).jpeg";
import room11 from "../assets/room images/images (11).jpeg";
import room12 from "../assets/room images/images (12).jpeg";
import room13 from "../assets/room images/images (13).jpeg";
import room14 from "../assets/room images/images (14).jpeg";
import room15 from "../assets/room images/images (15).jpeg";
import room16 from "../assets/room images/images (16).jpeg";
import room17 from "../assets/room images/images (17).jpeg";
import room18 from "../assets/room images/images (18).jpeg";
import room19 from "../assets/room images/images (19).jpeg";
import room20 from "../assets/room images/images.jpeg";

const roomImages = {
    101: room1,
    102: room2,
    103: room3,
    104: room4,
    105: room5,
    106: room7,
    107: room8,
    108: room9,
    109: room10,
    110: room11,
    111: room12,
    112: room13,
    113: room14,
    114: room15,
    115: room16,
    116: room17,
    117: room18,
    118: room19,
    119: room20,
};

const getLocalDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

const Room = () => {
    const room = useLoaderData();
    const user = useSelector((state) => state.user?.user);
    const navigate = useNavigate();

    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [isAvailable, setIsAvailable] = useState(null);
    const [checkingAvailability, setCheckingAvailability] = useState(false);

    const today = getLocalDate();

    // Check room availability
    useEffect(() => {
        let active = true;

        const checkAvailability = async () => {
            if (!room?._id || !checkIn || !checkOut) {
                setIsAvailable(null);
                setCheckingAvailability(false);
                return;
            }

            if (checkIn < today || checkOut <= checkIn) {
                setIsAvailable(null);
                setCheckingAvailability(false);
                return;
            }

            try {
                setCheckingAvailability(true);

                const response =
                    await bookingServices.checkRoomAvailability(
                        room._id,
                        checkIn,
                        checkOut
                    );

                if (active) {
                    setIsAvailable(response.data.available);
                }
            } catch (error) {
                console.error(
                    "Availability error:",
                    error.response?.data?.message || error.message
                );

                if (active) {
                    setIsAvailable(null);
                }
            } finally {
                if (active) {
                    setCheckingAvailability(false);
                }
            }
        };

        checkAvailability();

        return () => {
            active = false;
        };
    }, [room?._id, checkIn, checkOut]);

    if (!room) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f7f5f0]">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-[#26352d]">
                        Room Not Found
                    </h2>
                    <p className="text-gray-500 mt-2">
                        The room you are looking for is unavailable.
                    </p>
                    <button
                        onClick={() => navigate("/rooms")}
                        className="mt-5 px-6 py-3 bg-[#26352d] text-white rounded-lg"
                    >
                        Back to Rooms
                    </button>
                </div>
            </div>
        );
    }

    const image = roomImages[room.roomnumber];

    const nights =
        checkIn && checkOut && checkOut > checkIn
            ? Math.round(
                (Date.parse(checkOut) - Date.parse(checkIn)) /
                (1000 * 60 * 60 * 24)
            )
            : 0;

    const totalPrice = nights * Number(room.price);

    const isCustomer = user?.role === "customer";

    const isManager = ["admin", "receptionist"].includes(user?.role);

    const roomUnavailable = room.isavailable === false;

    const unavailableForDates = isAvailable === false;

    const handleBooking = async () => {
        if (!user?._id) {
            alert("Please login before booking.");
            navigate("/login");
            return;
        }

        if (!checkIn || !checkOut) {
            alert("Please select check-in and check-out dates.");
            return;
        }

        if (checkIn < today) {
            alert("Check-in date cannot be in the past.");
            return;
        }

        if (checkOut <= checkIn) {
            alert("Check-out date must be after check-in date.");
            return;
        }

        if (roomUnavailable) {
            alert("This room is currently unavailable.");
            return;
        }

        if (checkingAvailability) {
            alert("Please wait while checking room availability.");
            return;
        }

        if (isAvailable === false) {
            alert("This room is not available for the selected dates.");
            return;
        }

        if (isAvailable === null) {
            alert("Room availability is still being checked. Please try again.");
            return;
        }

        navigate("/payment", {
            state: {
                roomId: room._id,
                checkin: checkIn,
                checkout: checkOut,
                numberofguests: room.capacity,
                room: room,
            },
        });
    };

    return (
        <div className="min-h-screen bg-[#f5f3ee] py-8 sm:py-12 px-4 sm:px-6">

            <div className="max-w-7xl mx-auto">

                {/* Breadcrumb */}

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-7">
                    <button
                        onClick={() => navigate("/")}
                        className="hover:text-[#a47b43] transition"
                    >
                        Home
                    </button>

                    <span>/</span>

                    <button
                        onClick={() => navigate("/rooms")}
                        className="hover:text-[#a47b43] transition"
                    >
                        Rooms
                    </button>

                    <span>/</span>

                    <span className="text-[#26352d] font-semibold">
                        Room {room.roomnumber}
                    </span>
                </div>

                {/* Main Room Card */}

                <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.07)]">

                    {/* Room Image and Information */}

                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Image */}

                        <div className="relative h-[280px] sm:h-[420px] lg:h-[550px] bg-gray-200">

                            {image ? (
                                <img
                                    src={image}
                                    alt={`Apple Tree Hotel Room ${room.roomnumber}`}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-500">
                                    No Image Available
                                </div>
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                            <div className="absolute bottom-6 left-6">
                                <span className="bg-white/95 text-[#26352d] px-5 py-2 rounded-lg text-sm font-semibold shadow-lg">
                                    APPLE TREE HOTEL
                                </span>
                            </div>

                            <div className="absolute top-6 right-6">
                                <span
                                    className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide shadow-md ${roomUnavailable
                                        ? "bg-red-100 text-red-700"
                                        : "bg-emerald-100 text-emerald-800"
                                        }`}
                                >
                                    {roomUnavailable ? "UNAVAILABLE" : "AVAILABLE"}
                                </span>
                            </div>

                        </div>

                        {/* Room Details */}

                        <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">

                            <p className="text-[#a47b43] text-xs font-bold tracking-[3px] uppercase mb-4">
                                EXCLUSIVE ACCOMMODATION
                            </p>

                            <div className="flex justify-between items-start gap-3">

                                <div>
                                    <p className="text-gray-500 text-sm font-medium">
                                        {room.roomtype}
                                    </p>

                                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#26352d] mt-2">
                                        Room {room.roomnumber}
                                    </h1>
                                </div>

                                <div className="hidden sm:block text-[#b38a4b] text-4xl">
                                    ✦
                                </div>

                            </div>

                            {/* Price */}

                            <div className="mt-7 flex items-baseline gap-2">

                                <span className="text-4xl sm:text-5xl font-bold text-[#26352d]">
                                    ₹{Number(room.price).toLocaleString("en-IN")}
                                </span>

                                <span className="text-gray-500 text-sm">
                                    / night
                                </span>

                            </div>

                            <div className="w-16 h-1 bg-[#b38a4b] mt-7 rounded-full"></div>

                            {/* Description */}

                            <div className="mt-7">

                                <h2 className="text-xl font-semibold text-[#26352d] mb-3">
                                    About This Room
                                </h2>

                                <p className="text-gray-600 leading-8 text-sm sm:text-base">
                                    {room.description}
                                </p>

                            </div>

                            {/* Room Information */}

                            <div className="grid grid-cols-2 gap-4 mt-8">

                                <div className="bg-[#f7f5f0] rounded-xl p-4 sm:p-5">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                                        Location
                                    </p>

                                    <p className="text-[#26352d] font-semibold mt-2">
                                        {room.location}
                                    </p>
                                </div>

                                <div className="bg-[#f7f5f0] rounded-xl p-4 sm:p-5">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                                        Guest Capacity
                                    </p>

                                    <p className="text-[#26352d] font-semibold mt-2">
                                        {room.capacity} Guests
                                    </p>
                                </div>

                                <div className="bg-[#f7f5f0] rounded-xl p-4 sm:p-5">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                                        Room Type
                                    </p>

                                    <p className="text-[#26352d] font-semibold mt-2">
                                        {room.roomtype}
                                    </p>
                                </div>

                                <div className="bg-[#f7f5f0] rounded-xl p-4 sm:p-5">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                                        Room Number
                                    </p>

                                    <p className="text-[#26352d] font-semibold mt-2">
                                        {room.roomnumber}
                                    </p>
                                </div>

                            </div>

                            {/* Hospitality Message */}

                            <div className="mt-8 border-l-2 border-[#b38a4b] pl-4">
                                <p className="text-sm text-gray-500 italic leading-7">
                                    Experience exceptional comfort, thoughtful
                                    hospitality and a memorable stay at
                                    Apple Tree Hotel.
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Customer Booking Section */}

                    {isCustomer && (
                        <div className="border-t border-gray-200">

                            <div className="bg-[#26352d] px-6 sm:px-10 py-7">

                                <p className="text-[#d8b47a] text-xs font-bold tracking-[3px]">
                                    RESERVATION
                                </p>

                                <h2 className="text-2xl sm:text-3xl text-white font-semibold mt-2">
                                    Book Your Stay
                                </h2>

                                <p className="text-gray-300 text-sm mt-2">
                                    Choose your dates and enjoy a comfortable stay with us.
                                </p>

                            </div>

                            <div className="p-6 sm:p-10">

                                {/* Date Selection */}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    <div>
                                        <label className="block text-sm font-semibold text-[#26352d] mb-3">
                                            Check-in Date
                                        </label>

                                        <input
                                            type="date"
                                            min={today}
                                            value={checkIn}
                                            onChange={(e) => {
                                                setCheckIn(e.target.value);

                                                if (
                                                    checkOut &&
                                                    e.target.value >= checkOut
                                                ) {
                                                    setCheckOut("");
                                                }
                                            }}
                                            className="w-full bg-[#faf9f6] border border-gray-200 rounded-xl px-4 py-4 text-gray-700 outline-none focus:border-[#b38a4b] focus:ring-2 focus:ring-[#b38a4b]/20 transition"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-[#26352d] mb-3">
                                            Check-out Date
                                        </label>

                                        <input
                                            type="date"
                                            min={checkIn || today}
                                            value={checkOut}
                                            onChange={(e) => setCheckOut(e.target.value)}
                                            className="w-full bg-[#faf9f6] border border-gray-200 rounded-xl px-4 py-4 text-gray-700 outline-none focus:border-[#b38a4b] focus:ring-2 focus:ring-[#b38a4b]/20 transition"
                                        />
                                    </div>

                                </div>

                                {/* Availability Message */}

                                {checkingAvailability && (
                                    <div className="mt-5 text-sm text-[#a47b43] font-medium">
                                        Checking room availability...
                                    </div>
                                )}

                                {!checkingAvailability && isAvailable === true && (
                                    <div className="mt-5 bg-emerald-50 text-emerald-700 p-4 rounded-xl text-sm font-medium">
                                        ✓ Great! This room is available for your selected dates.
                                    </div>
                                )}

                                {!checkingAvailability && isAvailable === false && (
                                    <div className="mt-5 bg-red-50 text-red-700 p-4 rounded-xl text-sm font-medium">
                                        This room is not available for your selected dates. Please choose different dates.
                                    </div>
                                )}

                                {/* Price Summary */}

                                {nights > 0 && (
                                    <div className="mt-7 bg-[#f7f5f0] border border-[#e8e1d5] rounded-2xl p-5 sm:p-7">

                                        <div className="flex justify-between items-center text-sm text-gray-600">
                                            <span>
                                                ₹{Number(room.price).toLocaleString("en-IN")} × {nights} {nights === 1 ? "night" : "nights"}
                                            </span>

                                            <span className="font-semibold text-[#26352d]">
                                                ₹{totalPrice.toLocaleString("en-IN")}
                                            </span>
                                        </div>

                                    </div>
                                )}

                                {/* Book Button */}

                                <button
                                    onClick={handleBooking}
                                    disabled={
                                        checkingAvailability ||
                                        roomUnavailable ||
                                        unavailableForDates
                                    }
                                    className="w-full mt-7 bg-[#26352d] hover:bg-[#a47b43] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    {roomUnavailable
                                        ? "Room Unavailable"
                                        : checkingAvailability
                                            ? "Checking Availability..."
                                            : unavailableForDates
                                                ? "Not Available for Selected Dates"
                                                : "Book Now  →"}
                                </button>

                                <p className="text-center text-xs text-gray-500 mt-4">
                                    Secure payment processing through Razorpay.
                                    Your booking is confirmed after successful payment verification.
                                </p>

                            </div>
                        </div>
                    )}

                    {/* Admin and Receptionist Management Section */}

                    {isManager && (
                        <div className="border-t border-gray-200 p-6 sm:p-10 bg-[#faf9f6]">

                            <p className="text-[#a47b43] text-xs font-bold tracking-[3px]">
                                ROOM MANAGEMENT
                            </p>

                            <h2 className="text-2xl font-semibold text-[#26352d] mt-2">
                                Manage Room {room.roomnumber}
                            </h2>

                            <p className="text-sm text-gray-500 mt-2">
                                Update room information or manage this room from the administration panel.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mt-7">

                                <button
                                    onClick={() => navigate(`/updateroom/${room._id}`)}
                                    className="flex-1 bg-[#26352d] hover:bg-[#a47b43] text-white font-semibold py-4 px-6 rounded-xl transition duration-300"
                                >
                                    ✎ &nbsp; Update Room
                                </button>

                                <button
                                    onClick={() => navigate(`/deleteroom/${room._id}`)}
                                    className="flex-1 bg-white border border-red-300 hover:bg-red-600 hover:text-white text-red-600 font-semibold py-4 px-6 rounded-xl transition duration-300"
                                >
                                    Delete Room
                                </button>

                            </div>

                        </div>
                    )}

                </div>

                {/* Bottom Information */}

                <div className="text-center mt-8">

                    <p className="text-[#a47b43] text-xs font-bold tracking-[3px]">
                        APPLE TREE HOTEL
                    </p>

                    <p className="text-gray-500 text-sm mt-2">
                        Comfort in every moment. Memories in every stay.
                    </p>

                </div>

            </div>
        </div >
    );
};

export default Room;