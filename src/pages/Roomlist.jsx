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

const roomImages = [
  room1,
  room2,
  room3,
  room4,
  room5,
  room7,
  room8,
  room9,
  room10,
  room11,
  room12,
  room13,
  room14,
  room15,
  room16,
  room17,
  room18,
  room19,
  room20,
];

const RoomList = () => {
  const rooms = useLoaderData();

  console.log("Rooms:", rooms);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <p className="text-blue-600 font-semibold uppercase tracking-widest">
          Welcome to our hotel
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
          Find Your Perfect Room
        </h1>

        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Choose from our comfortable and beautifully designed rooms
          for a relaxing and memorable stay.
        </p>
      </div>

      {/* Room Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">

        {rooms?.map((room, index) => (
          <div
            key={room._id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg
                       hover:shadow-2xl transition duration-300
                       hover:-translate-y-1"
          >

            {/* Image */}
            <div className="relative h-60 overflow-hidden">

              <img
                src={roomImages[index % roomImages.length]}
                alt={`Room ${room.roomnumber}`}
                className="w-full h-full object-cover
                           hover:scale-110 transition duration-500"
              />

              {/* Availability */}
              <div className="absolute top-4 right-4">
                {room.isavailable ? (
                  <span className="bg-green-500 text-white px-3 py-1
                                   rounded-full text-sm font-semibold">
                    Available
                  </span>
                ) : (
                  <span className="bg-red-500 text-white px-3 py-1
                                   rounded-full text-sm font-semibold">
                    Booked
                  </span>
                )}
              </div>

              {/* Room number */}
              <div className="absolute bottom-4 left-4">
                <span className="bg-black/70 text-white px-4 py-2
                                 rounded-lg font-semibold">
                  Room {room.roomnumber}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 ">

              <div className="flex justify-between items-start gap-3">

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 capitalize">
                    {room.roomtype}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    📍 {room.location}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">
                    ₹{room.price}
                  </p>

                  <p className="text-xs text-gray-400">
                    per night
                  </p>
                </div>

              </div>

              {/* Description */}
              <p className="text-gray-600 mt-4 line-clamp-2">
                {room.description}
              </p>

              {/* Details */}
              <div className="flex items-center gap-4 mt-5
                              border-t pt-4 text-gray-600">

                <span className="text-sm">
                  👤 {room.capacity} Guest
                  {room.capacity > 1 ? "s" : ""}
                </span>

                <span className="text-sm">
                  🛏️ {room.roomtype}
                </span>

              </div>

              {/* Button */}
              <button
                disabled={!room.isavailable}
                className={`w-full mt-5 py-3 rounded-xl
                            font-semibold transition duration-300
                            ${room.isavailable
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
              >
                {room.isavailable ? "Book This Room" : "Not Available"}
              </button>

            </div>
          </div>
        ))}

      </div>

      {/* No rooms */}
      {(!rooms || rooms.length === 0) && (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-600">
            No rooms available
          </h2>

          <p className="text-gray-400 mt-2">
            Please check again later.
          </p>
        </div>
      )}

    </div>
  );
};

export default RoomList;