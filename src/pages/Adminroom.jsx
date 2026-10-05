import { Navigate, useNavigate } from "react-router-dom";
const adminroom = () => {
    const navigate = useNavigate()
    return (
        <div className="justify-center m-50 px-60 py-8">
            <div className="text-2xl font-bold text-gray-800 mb-4 py-5">Room Management</div>
            <div className="justify-content-center flex space-x-4">
                <div><button className="bg-blue-600 rounded-xl px-5 py-4 text-white font-bold hover:bg-blue-700 transition duration-300 cursor-pointer" onClick={() => navigate("/createroom")}>create room</button></div>
                <div><button className="bg-blue-600 rounded-xl px-5 py-4 text-white font-bold hover:bg-blue-700 transition duration-300 cursor-pointer" onClick={() => navigate("/roomlist")}>update room</button></div>
                <div><button className="bg-blue-600 rounded-xl px-5 py-4 text-white font-bold hover:bg-blue-700 transition duration-300 cursor-pointer" onClick={() => navigate("/roomlist")}>delete room</button></div>
            </div>
        </div>
    )
}

export default adminroom;
