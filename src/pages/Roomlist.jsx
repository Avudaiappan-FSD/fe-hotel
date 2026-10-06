import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  const rooms = useLoaderData();
  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered rooms
  const [filteredRooms, setFilteredRooms] = useState(rooms || []);

  //selected roomtypes
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);
  const applyFilters = (types, searchValue) => {
    const search = searchValue.trim().toLowerCase();
    const result = (rooms || []).filter((room) => {
      const roomNumber =
        room.roomnumber?.toString().toLowerCase() || "";
      const roomType =
        room.roomtype?.toString().toLowerCase() || "";
      const location =
        room.location?.toString().toLowerCase() || "";
      const description =
        room.description?.toString().toLowerCase() || "";
      const matchesSearch = search === "" || roomNumber.includes(search) || roomType.includes(search) || location.includes(search) || description.includes(search);
      const matchesRoomType = types.length === 0 || types.some((type) => String(type).trim().toLowerCase() === roomType);
      return matchesRoomType && matchesSearch;
    });
    setFilteredRooms(result);
  };

  const handleRoomTypeChange = (type) => {
    setFilteredRooms((prev) => {
      let updatedTypes;
      if (prev.includes(type)) {
        updatedTypes = prev.filter((t) => t !== type);
      } else {
        updatedTypes = [...prev, type];
      }
      applyFilters(updatedTypes, searchTerm);
      return updatedTypes;
    });
  };
  const roomfilteredRooms = filteredRooms

  // Search function
  const handleSearch = () => {
    applyFilters(selectedRoomTypes, searchTerm);
  };


  // Reset search
  const handleReset = () => {
    setSearchTerm("");
    setFilteredRooms(rooms || []);
  };


  return (

    <div className="min-h-screen py-10">

      {/* ================= HEADER ================= */}

      <div className="max-w-7xl mx-auto text-center mb-10 px-4">

        <p className="text-blue-600 font-semibold uppercase tracking-widest">
          Welcome to Apple Tree
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
          Find Your Perfect Room
        </h1>

        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Choose from our comfortable and beautifully designed rooms
          for a relaxing and memorable stay.
        </p>

        {/*=============== sidebar ===================*/}

      </div>
      <div className="flex gap-6 items-stretch">
        <div className="w-64 shrink-0 sticky top-24 self-start hidden lg:block">
          <div className="bg-white rounded-2xl shadow-md p-6 h-full">
            <h2 className="text-xl font-bold mb-5">Room Filters</h2>

            <input
              type="text"
              placeholder="Search rooms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-full border rounded-lg p-2 mb-5" />
            <h3 className="font-semibold mb-2">Room Type</h3>
            <div className="space-y-2">
              <label className="block">
                <input type="checkbox"
                  name="roomtype"
                  checked={selectedRoomTypes.includes("Single Room")}
                  onChange={() => handleRoomTypeChange("Single Room")}
                /> Single Room
              </label>
              <label className="block">
                <input type="checkbox"
                  name="roomtype"
                  checked={selectedRoomTypes.includes("Double Room")}
                  onChange={() => handleRoomTypeChange("Double Room")}
                /> Double Room
              </label>
              <label className="block">
                <input type="checkbox"
                  name="roomtype"
                  checked={selectedRoomTypes.includes("Deluxe Room")}
                  onChange={() => handleRoomTypeChange("Deluxe Room")}
                /> Deluxe Room
              </label>
              <br></br>
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">Price Range</h3>
                <div className="flex gap-2">
                  <input type="number" placeholder="Min" className="w-1/2 border rounded-lg px-3 py-2 outline-none" />
                  <input type="number" placeholder="max" className="w-1/2 border rounded-lg px-3 py-2 outline-none" />
                </div>
                <br></br>
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-700 mb-3">Guests</h3>
                  <label className="flex items-center gap-2 mb-2">
                    <input type="radio" name="guests"></input>
                    <span>1 Guest</span>
                  </label>
                  <label className="flex items-center gap-2 mb-2">
                    <input type="radio" name="guests"></input>
                    <span>2 Guests</span>
                  </label>
                  <label className="flex items-center gap-2 mb-2">
                    <input type="radio" name="guests"></input>
                    <span>3+ Guests</span>
                  </label>
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 mb-3">Availability</h3>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span>Available only</span>
                    </label>
                  </div>
                  <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg">
                    Rooms Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= ROOM CARDS ================= */}

        <div

          className="flex-1 min-w-0 space-y-6 "
        >
          {roomfilteredRooms?.map((room) => (
            <div
              key={room._id}
              onClick={() => navigate(`/rooms/${room._id}`)}
              className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-row md:flex-row hover:shadow-2xl transition duration-300 cursor-pointer"
            >

              {/* ================= IMAGE ================= */}
              <div className="relative w-full md:w-1/2 h-64 md:h-auto">

                <img
                  src={roomImages[room.roomnumber]}
                  alt={`Room ${room.roomnumber}`}
                  className="w-full h-full object-cover rounded-2xl"
                />

                {/* Room Number */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/70 text-white px-4 py-2 rounded-lg font-semibold">
                    Room {room.roomnumber}
                  </span>
                </div>

                {/* Availability */}
                <div className="absolute top-4 right-4">
                  {room.isavailable ? (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Available
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Not Available
                    </span>
                  )}
                </div>

              </div>


              {/* ================= ROOM DETAILS ================= */}
              <div className="w-1/2 p-6 flex flex-col justify-between">

                <div>

                  {/* Room Type + Price */}
                  <div className="flex justify-between items-start gap-4">

                    <div>
                      <p className="text-sm text-blue-600 font-semibold uppercase">
                        {room.roomtype}
                      </p>

                      <h2 className="text-2xl font-bold text-gray-800 mt-1">
                        Room {room.roomnumber}
                      </h2>
                    </div>

                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">
                        ₹{room.price}
                      </p>

                      <p className="text-sm text-gray-500">
                        / night
                      </p>
                    </div>

                  </div>


                  {/* Location */}
                  <p className="text-gray-500 mt-3">
                    📍 {room.location}
                  </p>


                  {/* Description */}
                  <div className="mt-5">

                    <h3 className="font-semibold text-gray-800 mb-2">
                      About this room
                    </h3>

                    <p className="text-gray-600 text-sm leading-6">
                      {room.description}
                    </p>

                  </div>


                  {/* Capacity + Room Type */}
                  <div className="flex gap-6 mt-5 text-sm text-gray-600">

                    <span>
                      👤 {room.capacity} Guests
                    </span>

                    <span>
                      🛏️ {room.roomtype}
                    </span>

                  </div>

                </div>


                {/* ================= BOOK BUTTON ================= */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/rooms/${room._id}`);
                  }}
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                >
                  View Room
                </button>

              </div>

            </div>
          ))}


          {/* ================= NO ROOMS ================= */}

          {(!roomfilteredRooms || roomfilteredRooms.length === 0) && (

            <div className="text-center py-20">

              <h2 className="text-2xl font-bold text-gray-800">
                No rooms found
              </h2>

              <p className="text-gray-500 mt-2">
                Try searching with another room number, room type or location.
              </p>

              <button
                onClick={handleReset}
                className="mt-5 bg-blue-600 text-white 
                       px-6 py-3 rounded-lg hover:bg-blue-700"
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