import { Navigate, useNavigate } from "react-router-dom";
const adminroom = () => {
    const navigate = useNavigate()
    return (
        <div>
            Room Management
            <div>
                <div><button onClick={() => navigate("/createroom")}>create room</button></div>
                <div><button onClick={() => navigate("/updateroom")}>update room</button></div>
                <div><button onClick={() => navigate("/deleteroom")}>delete room</button></div>
            </div>
        </div>
    )
}

export default adminroom;
