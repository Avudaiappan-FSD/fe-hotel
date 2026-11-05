import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";

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

const RoomList = () => {
  const navigate = useNavigate();
  const rooms = useLoaderData() || [];

  // Search and filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedGuests, setSelectedGuests] = useState("");
  const [availableOnly, setAvailableOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);

  // Apply all filters
  const filteredRooms = rooms.filter((room) => {
    const search = searchTerm.trim().toLowerCase();

    const roomNumber = String(room.roomnumber || "").toLowerCase();
    const roomType = String(room.roomtype || "").toLowerCase();
    const location = String(room.location || "").toLowerCase();
    const description = String(room.description || "").toLowerCase();

    const matchesSearch =
      search === "" ||
      roomNumber.includes(search) ||
      roomType.includes(search) ||
      location.includes(search) ||
      description.includes(search);

    const matchesRoomType =
      selectedRoomTypes.length === 0 ||
      selectedRoomTypes.some(
        (type) => type.toLowerCase() === roomType
      );

    const price = Number(room.price || 0);

    const matchesPrice =
      (minPrice === "" || price >= Number(minPrice)) &&
      (maxPrice === "" || price <= Number(maxPrice));

    const capacity = Number(room.capacity || 0);

    const matchesGuests =
      selectedGuests === "" ||
      (selectedGuests === "3+"
        ? capacity >= 3
        : capacity >= Number(selectedGuests));

    const matchesAvailability =
      !availableOnly ||
      room.isavailable === true ||
      room.isavailable === "true";

    return (
      matchesSearch &&
      matchesRoomType &&
      matchesPrice &&
      matchesGuests &&
      matchesAvailability
    );
  });

  // Room type selection
  const handleRoomTypeChange = (type) => {
    setSelectedRoomTypes((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type]
    );
  };

  // Reset filters
  const handleReset = () => {
    setSearchTerm("");
    setMinPrice("");
    setMaxPrice("");
    setSelectedGuests("");
    setAvailableOnly(false);
    setSelectedRoomTypes([]);
    setShowFilters(false);
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-8 bg-[#f7f5f0]">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-12">

        <p className="text-[#a37b42] font-bold uppercase tracking-[4px] text-xs">
          Welcome to Apple Tree
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-[#17211d] mt-3">
          Find Your Perfect Room
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-7">
          Choose from our comfortable and beautifully designed
          rooms for a relaxing and memorable stay.
        </p>

      </div>

      {/* MOBILE FILTER BUTTON */}
      <div className="lg:hidden max-w-7xl mx-auto mb-5">

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full bg-[#17211d] text-white py-3 rounded-xl font-semibold"
        >
          {showFilters ? "Close Filters −" : "Show Filters +"}
        </button>

      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

        {/* FILTER SIDEBAR */}
        <aside
          className={`w-full lg:w-72 shrink-0 ${showFilters ? "block" : "hidden lg:block"
            }`}
        >

          <div className="bg-white rounded-2xl border border-[#e8e3d9]
                    shadow-sm p-6 lg:sticky lg:top-24">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-xl font-bold text-[#17211d]">
                Room Filters
              </h2>

              <button
                onClick={handleReset}
                className="text-xs font-semibold text-[#a37b42] hover:underline"
              >
                Clear All
              </button>

            </div>

            {/* SEARCH */}
            <input
              type="text"
              placeholder="Search rooms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-200 rounded-lg
                            px-4 py-3 mb-7 outline-none
                            focus:border-[#a37b42] transition"
            />

            {/* ROOM TYPE */}
            <h3 className="font-bold text-[#17211d] mb-4">
              Room Type
            </h3>

            <div className="space-y-3 mb-7">

              {["Single Room", "Double Room", "Deluxe Room"].map(
                (type) => (
                  <label
                    key={type}
                    className="flex items-center gap-3 text-sm
                                        text-gray-600 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedRoomTypes.includes(type)}
                      onChange={() => handleRoomTypeChange(type)}
                      className="accent-[#a37b42] w-4 h-4"
                    />

                    {type}
                  </label>
                )
              )}

            </div>

            <div className="border-t border-gray-100 my-6"></div>

            {/* PRICE RANGE */}
            <h3 className="font-bold text-[#17211d] mb-4">
              Price Range
            </h3>

            <div className="flex gap-3 mb-7">

              <input
                type="number"
                min="0"
                placeholder="Min ₹"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-1/2 min-w-0 border border-gray-200
                                rounded-lg px-3 py-3 text-sm outline-none
                                focus:border-[#a37b42]"
              />

              <input
                type="number"
                min="0"
                placeholder="Max ₹"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-1/2 min-w-0 border border-gray-200
                                rounded-lg px-3 py-3 text-sm outline-none
                                focus:border-[#a37b42]"
              />

            </div>

            <div className="border-t border-gray-100 my-6"></div>

            {/* GUESTS */}
            <h3 className="font-bold text-[#17211d] mb-4">
              Guests
            </h3>

            <div className="space-y-3 mb-7">

              {[
                { label: "1 Guest", value: "1" },
                { label: "2 Guests", value: "2" },
                { label: "3+ Guests", value: "3+" },
              ].map((guest) => (
                <label
                  key={guest.value}
                  className="flex items-center gap-3 text-sm
                                    text-gray-600 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="guests"
                    value={guest.value}
                    checked={selectedGuests === guest.value}
                    onChange={(e) =>
                      setSelectedGuests(e.target.value)
                    }
                    className="accent-[#a37b42] w-4 h-4"
                  />

                  {guest.label}
                </label>
              ))}

              <button
                onClick={() => setSelectedGuests("")}
                className="text-xs text-[#a37b42] font-semibold hover:underline"
              >
                Clear guest selection
              </button>

            </div>

            <div className="border-t border-gray-100 my-6"></div>

            {/* AVAILABILITY */}
            <label className="flex items-center gap-3 text-sm
                        font-semibold text-[#17211d] cursor-pointer">

              <input
                type="checkbox"
                checked={availableOnly}
                onChange={(e) => setAvailableOnly(e.target.checked)}
                className="accent-[#a37b42] w-4 h-4"
              />

              Show available rooms only

            </label>

          </div>

        </aside>

        {/* ROOM CARDS */}
        <div className="flex-1 min-w-0 space-y-7">

          {/* RESULTS COUNT */}
          <div className="flex justify-between items-center">

            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-bold text-[#17211d]">
                {filteredRooms.length}
              </span>{" "}
              rooms
            </p>

          </div>

          {filteredRooms.map((room) => (

            <div
              key={room._id}
              onClick={() => navigate(`/rooms/${room._id}`)}
              className="group bg-white border border-[#e8e3d9]
                            rounded-2xl overflow-hidden flex flex-col md:flex-row
                            shadow-sm hover:shadow-xl hover:-translate-y-1
                            transition-all duration-300 cursor-pointer"
            >

              {/* ROOM IMAGE */}
              <div className="relative w-full md:w-[48%]
                            h-64 md:min-h-[320px] overflow-hidden">

                <img
                  src={roomImages[room.roomnumber]}
                  alt={`Room ${room.roomnumber}`}
                  className="w-full h-full object-cover
                                    group-hover:scale-105 transition-transform duration-500"
                />

                {/* ROOM NUMBER */}
                <div className="absolute bottom-4 left-4">

                  <span className="bg-[#17211d]/90 text-white
                                    px-4 py-2 rounded-lg text-sm font-semibold shadow-md">
                    Room {room.roomnumber}
                  </span>

                </div>

                {/* AVAILABILITY */}
                <div className="absolute top-4 right-4">

                  {room.isavailable === true ||
                    room.isavailable === "true" ? (

                    <span className="bg-[#287a55] text-white
                                        px-4 py-2 rounded-full text-xs font-semibold shadow-md">
                      Available
                    </span>

                  ) : (

                    <span className="bg-[#a94442] text-white
                                        px-4 py-2 rounded-full text-xs font-semibold shadow-md">
                      Not Available
                    </span>

                  )}

                </div>

              </div>

              {/* ROOM DETAILS */}
              <div className="flex-1 min-w-0 p-5 md:p-7
                            flex flex-col justify-between">

                <div>

                  {/* ROOM TYPE AND PRICE */}
                  <div className="flex justify-between
                                    items-start gap-3">

                    <div>

                      <p className="text-xs tracking-widest
                                            uppercase font-bold text-[#a37b42]">
                        {room.roomtype}
                      </p>

                      <h2 className="text-2xl font-bold
                                            text-[#17211d] mt-2">
                        Room {room.roomnumber}
                      </h2>

                    </div>

                    <div className="text-right shrink-0">

                      <p className="text-2xl font-bold
                                            text-[#a37b42]">
                        ₹{room.price}
                      </p>

                      <p className="text-xs text-gray-500 mt-1">
                        Per night
                      </p>

                    </div>

                  </div>

                  {/* LOCATION */}
                  <p className="text-sm text-gray-500 mt-4">
                    📍 {room.location}
                  </p>

                  {/* DESCRIPTION */}
                  <div className="mt-5">

                    <h3 className="text-sm font-bold
                                        text-[#17211d] mb-2">
                      About this room
                    </h3>

                    <p className="text-sm text-gray-600 leading-7">
                      {room.description}
                    </p>

                  </div>

                  {/* CAPACITY */}
                  <div className="flex flex-wrap gap-x-6
                                    gap-y-3 mt-5 text-sm text-gray-600">

                    <span>
                      👤 {room.capacity} Guests
                    </span>

                    <span>
                      🛏️ {room.roomtype}
                    </span>

                  </div>

                </div>

                {/* VIEW ROOM BUTTON */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/rooms/${room._id}`);
                  }}
                  className="w-full mt-7 py-3.5 px-5
                                    bg-[#17211d] text-white rounded-lg
                                    font-semibold text-sm tracking-wide
                                    hover:bg-[#a37b42] hover:text-white
                                    transition-all duration-300
                                    shadow-sm hover:shadow-md"
                >
                  View Room <span className="ml-2">→</span>
                </button>

              </div>

            </div>

          ))}

          {/* NO ROOMS */}
          {filteredRooms.length === 0 && (

            <div className="bg-white border border-[#e8e3d9]
                        rounded-2xl text-center py-20 px-5">

              <div className="text-5xl mb-5">⌂</div>

              <h2 className="text-2xl font-bold text-[#17211d]">
                No Rooms Found
              </h2>
              <p className="text-gray-500 mt-3">Try adjusting your search or filter criteria</p>
              <button
                onClick={handleReset}
                className="mt-6 bg-[#17211d] text-white
                px-7 py-3 rounded-lg font-semibold
                hover:bg-[#a37b42] transition"
              >
                Show All Rooms
              </button>
            </div>

          )}
        </div>

      </div>
    </div>
  );
};

export default RoomList;