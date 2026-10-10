
import { useLoaderData } from 'react-router-dom'



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
const MyBookings = () => {
  const booking = useLoaderData();
  console.log(booking);
  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            My Bookings
          </h1>

          <p className="text-gray-500 mt-2">
            View and manage your hotel reservations.
          </p>
        </div>

        {/* Empty State */}
        {!booking || booking.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
            <div className="text-5xl mb-4">🏨</div>

            <h2 className="text-xl font-semibold text-gray-800">
              No bookings yet
            </h2>

            <p className="text-gray-500 mt-2">
              Your reservations will appear here once you book a room.
            </p>
          </div>
        ) : (

          /* Booking Cards */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {booking.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200 overflow-hidden"
              >

                {/* Room Image */}
                <div className="relative">
                  <img className="rounded-xl shadow-lg overflow-hidden" src={roomImages[item.room?.roomnumber]} alt={`Room ${item.room?.roomnumber}`} width='600' />

                  {/* Booking Status */}
                  <span className="absolute top-4 right-4 bg-green-100 text-green-700 text-sm font-semibold px-3 py-1.5 rounded-full">
                    {item.bookingstatus || "Booked"}
                  </span>
                </div>

                {/* Booking Details */}
                <div className="p-5 sm:p-6">

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-5">
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">
                        {item.room?.roomnumber || "Room"}
                      </h2>

                      <p className="text-gray-500 mt-1">
                        {item.room?.roomtype || "Hotel Room"}
                      </p>
                    </div>

                    <p className="text-xl font-bold text-blue-700">
                      ₹{item.totalprice}
                    </p>
                  </div>

                  {/* Check-in / Check-out */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                        Check-in
                      </p>

                      <p className="text-gray-800 font-semibold mt-2">
                        {item.checkin
                          ? new Date(item.checkin).toLocaleDateString("en-IN")
                          : "Not specified"}
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                        Check-out
                      </p>

                      <p className="text-gray-800 font-semibold mt-2">
                        {item.checkout
                          ? new Date(item.checkout).toLocaleDateString("en-IN")
                          : "Not specified"}
                      </p>
                    </div>

                  </div>

                  {/* Additional Details */}
                  <div className="mt-5 pt-4 border-t border-gray-100 space-y-2">

                    <div className="flex justify-between gap-3 text-sm">
                      <span className="text-gray-500">Booking ID</span>

                      <span className="text-gray-700 font-medium break-all text-right">
                        {item._id}
                      </span>
                    </div>

                    <div className="flex justify-between gap-3 text-sm">
                      <span className="text-gray-500">Guests</span>

                      <span className="text-gray-700 font-medium">
                        {item.numberofguests ?? "—"}
                      </span>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );

}

export default MyBookings;

