import { useNavigate, useParams } from "react-router-dom"
import roomServices from "../services/roomServices"

const DeleteRoom = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const handleDelete = async () => {
    try {
      await roomServices.deleteroom(id);
      setTimeout(() => navigate("/roomlist"), 500);
    } catch (error) {
      console.log(error);
      alert("Failed to delete room")
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-whiter shadow xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Delete Room</h1>
        <p className="text-gray-600 mb-6">Are you sure you want to delete this room?</p>
        <div className="justify-center flex space-x-4">
          <div>
            <button onClick={() => navigate(-1)} className=" px-5 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 ml-1 transition duration-300">Cancel</button>
          </div>
          <div>
            <button onClick={handleDelete} className="bg-red-600 text-white rounded-lg px-5 py-2 hover:bg-red-700 hover:shadow-lg transition duration-300">Delete Room</button>
          </div>
        </div>
      </div>
    </div >

  )
}

export default DeleteRoom
