import { useDispatch, useSelector } from "react-redux";
import { setroomnumber, setroomtype, setprice, setcapacity, setdescription, setlocation } from "../redux/features/auth/roomslice"
import { useNavigate } from "react-router-dom";
import roomServices from "../services/roomServices";

const CreateRoom = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useSelector((state) => state.room.form);
  const createRoom = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const response = await roomServices.createroom(form);
      if (response.status === 201) {
        console.log('Room created successfully');
        dispatch(setroomnumber(''));
        dispatch(setroomtype(''));
        dispatch(setprice(''));
        dispatch(setcapacity(''));
        dispatch(setdescription(''));
        dispatch(setlocation(''));
      }
    } catch (error) {
      console.error('Error creating room:', error.response?.data?.message || error.message);

    }
  }
  return (
    <div className='max-w-xs mx-auto mt-20 mb-10  p-5 border rounded'>
      <div className=' text-xl mb-4 '>Create Room</div>
      <form className='p-4 border rounded flex flex-col space-y-3' onSubmit={createRoom}>
        <input type="text" placeholder='Enter Room Number' className='border-2 border-black rounded-md p-2 mt-4' value={form.roomnumber} onChange={(e) => dispatch(setroomnumber(e.target.value))} />
        <input type="text" placeholder='Enter Room Type' className='border-2 border-black rounded-md p-2 mt-4' value={form.roomtype} onChange={(e) => dispatch(setroomtype(e.target.value))} />
        <input type="text" placeholder='Enter Room Price' className='border-2 border-black rounded-md p-2 mt-4' value={form.price} onChange={(e) => dispatch(setprice(e.target.value))} />
        <input type="text" placeholder='Enter Room Capacity' className='border-2 border-black rounded-md p-2 mt-4' value={form.capacity} onChange={(e) => dispatch(setcapacity(e.target.value))} />
        <input type="text" placeholder='Enter Room Description' className='border-2 border-black rounded-md p-2 mt-4' value={form.description} onChange={(e) => dispatch(setdescription(e.target.value))} />
        <input type="text" placeholder='Enter Room Location' className='border-2 border-black rounded-md p-2 mt-4' value={form.location} onChange={(e) => dispatch(setlocation(e.target.value))} />
        <button className='bg-blue-500 text-white rounded-md p-2 mt-4'>Create Room</button>
      </form>
    </div>
  )

}

export default CreateRoom;
