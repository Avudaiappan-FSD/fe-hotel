
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
    <div>
      <h1 className='font-bold text-2xl'>My Bookings</h1>
      <div className='max-w-xl mx-auto rounded-xl'>
        {booking?.map((booking) => (
          <div key={booking._id}>
            <div className="h-64 sm:h-80 lg:h-full min-h-[400px] ">
              <img className="rounded-xl shadow-lg overflow-hidden" src={roomImages[booking.room?.roomnumber]} alt={`Room ${booking.room?.roomnumber}`} width='600' />
            </div>
            <div className=''>
              <h3>{booking.roomnumber}</h3>
              <p>Room type:{booking.room?.roomtype}</p>
              <p>check-in: {booking.checkin}</p>
              <p>check-out: {booking.checkout}</p>
              <p>Total price:{booking.totalprice}</p>
              <p>Booking status: {booking.bookingstatus}</p>
            </div>
          </div>
        ))
        }
      </div >
    </div>
  )

}

export default MyBookings;
