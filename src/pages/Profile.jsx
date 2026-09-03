import { useLoaderData } from "react-router-dom";
import edit from "../assets/images/edit.png";

const Profile = () => {

    const me = useLoaderData();
    console.log(me);
    return (
        <div>
            <h1 className="text-2xl font-bold px-3 py-4">Hi, {me.user.name}</h1>
            <div className="bg-blue-200 p-5 max-w-md mx-auto rounded-2xl mt-10">
                <div className="profileheader ">
                    <h1 className="text-2xl font-bold font-size: 25px;">Profile</h1>
                    <img src={edit} alt="Profile" className="w-7 h-7 rounded-full size-22px" />
                </div>

                <div className="bg-white shadow-md rounded-lg p-2">
                    <h2 className="text-xl font-semibold">Name: {me.user.name}</h2>
                    <p className="text-gray-700">Email: {me.user.email}</p>
                </div>
            </div>

        </div>
    )
}

export default Profile
