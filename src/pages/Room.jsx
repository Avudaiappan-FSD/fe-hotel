import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

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

const Room = () => {
    const room = useLoaderData();

    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    if (!room) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-xl font-semibold">Room not found</h2>
            </div>
        );
    }

    const image = roomImages[room.roomnumber];

    // Calculate number of nights
    let nights = 0;

    if (checkIn && checkOut) {
        const start = new Date(checkIn);
        const end = new Date(checkOut);

        const difference = end - start;
        nights = difference / (1000 * 60 * 60 * 24);

        if (nights < 0) {
            nights = 0;
        }
    }

    const totalPrice = nights * room.price;

    const handleBooking = () => {
        if (!checkIn || !checkOut) {
            alert("Please select check-in and check-out dates");
            return;
        }

        if (new Date(checkOut) <= new Date(checkIn)) {
            alert("Check-out date must be after check-in date");
            return;
        }

        console.log({
            roomId: room._id,
            roomNumber: room.roomnumber,
            checkIn,
            checkOut,
            nights,
            totalPrice,
        });

        alert("Booking details ready!");
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">

            <div className="max-w-6xl mx-auto">

                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

                    {/* Image + Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Room Image */}
                        <div className="h-64 sm:h-80 lg:h-full min-h-[400px]">
                            {image ? (
                                <img
                                    src={image}
                                    alt={`Room ${room.roomnumber}`}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                    <p className="text-gray-500">
                                        No image available
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Room Information */}
                        <div className="p-5 sm:p-8 lg:p-10">

                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">

                                <div>
                                    <p className="text-sm text-blue-600 font-semibold uppercase">
                                        {room.roomtype}
                                    </p>

                                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-1">
                                        Room {room.roomnumber}
                                    </h1>
                                </div>

                                <div
                                    className={`px-3 py-1 rounded-full text-sm font-semibold w-fit ${room.isavailable
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {room.isavailable ? "Available" : "Not Available"}
                                </div>

                            </div>

                            {/* Price */}
                            <div className="mt-6">
                                <span className="text-3xl font-bold text-gray-900">
                                    ₹{room.price}
                                </span>

                                <span className="text-gray-500 ml-2">
                                    / night
                                </span>
                            </div>

                            {/* Description */}
                            <div className="mt-6">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                    About this room
                                </h2>

                                <p className="text-gray-600 leading-7">
                                    {room.description}
                                </p>
                            </div>

                            {/* Room Info */}
                            <div className="grid grid-cols-2 gap-4 mt-6">

                                <div className="bg-gray-50 rounded-xl p-4">
                                    <p className="text-sm text-gray-500">
                                        Location
                                    </p>

                                    <p className="font-semibold text-gray-800 mt-1">
                                        {room.location}
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-4">
                                    <p className="text-sm text-gray-500">
                                        Capacity
                                    </p>

                                    <p className="font-semibold text-gray-800 mt-1">
                                        {room.capacity} Guest
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* Booking Section */}
                    <div className="border-t border-gray-200 p-5 sm:p-8">

                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5">
                            Book this room
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* Check In */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Check-in
                                </label>

                                <input
                                    type="date"
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Check Out */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Check-out
                                </label>

                                <input
                                    type="date"
                                    value={checkOut}
                                    min={checkIn}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                        </div>

                        {/* Price Summary */}
                        {nights > 0 && (
                            <div className="mt-6 bg-blue-50 rounded-xl p-5">

                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-600">
                                        ₹{room.price} × {nights} night
                                        {nights > 1 ? "s" : ""}
                                    </span>

                                    <span className="font-semibold">
                                        ₹{totalPrice}
                                    </span>
                                </div>

                                <div className="border-t border-blue-200 my-3"></div>

                                <div className="flex justify-between">
                                    <span className="font-bold text-gray-800">
                                        Total
                                    </span>

                                    <span className="text-xl font-bold text-blue-600">
                                        ₹{totalPrice}
                                    </span>
                                </div>

                            </div>
                        )}

                        {/* Booking Button */}
                        <button
                            onClick={handleBooking}
                            disabled={!room.isavailable}
                            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3.5 rounded-xl transition duration-200"
                        >
                            {room.isavailable ? "Book Now" : "Room Not Available"}
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Room;