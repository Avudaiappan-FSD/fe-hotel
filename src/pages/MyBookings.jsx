
import { useLoaderData } from 'react-router-dom'

const MyBookings = () => {
  const booking = useLoaderData();
  console.log(booking);

  return (
    <div>
     
      <p>checkin:{booking.checkin}</p>
    </div>
  )

}

export default MyBookings;
