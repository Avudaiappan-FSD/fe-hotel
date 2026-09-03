import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import edit from "../assets/images/edit.png";
import userService from "../services/userServices";
import authServices from "../services/authServices";

const Profile = () => {

    const me = useLoaderData();

    const [isEdit, setIsEdit] = useState(false);

    const [name, setName] = useState(me.user.name);
    const [email, setEmail] = useState(me.user.email);

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            await userService.updateprofile({
                name,
                email
            });
            const response = await authServices.me();
            console.log(response)

            setIsEdit(false);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>

            {/* Header */}
            <h1 className="text-2xl font-bold px-3 py-4">
                Hi, {me.user.name}
            </h1>

            <div className="bg-blue-200 p-9 max-w-xs rounded-xl shadow-md mx-auto">

                <div className="profile-header">

                    <h1 className="text-2xl font-bold">
                        Profile
                    </h1>

                    <button
                        onClick={() => setIsEdit(!isEdit)}
                        className="edit-btn"
                    >
                        <img
                            src={edit}
                            alt="Edit"
                        />
                    </button>

                </div>

                {/* Edit Form */}
                {isEdit ? (

                    <form
                        onSubmit={handleUpdate}
                        className="bg-white shadow-md rounded-lg p-5 mt-4"
                    >

                        <label>Name</label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border p-2 w-full mb-4"
                        />

                        <label>Email</label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border p-2 w-full mb-4"
                        />

                        <div className="flex gap-3">

                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                Save
                            </button>

                            <button
                                type="button"
                                onClick={() => setIsEdit(false)}
                                className="bg-gray-500 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>

                        </div>

                    </form>

                ) : (

                    /* Profile Details */
                    <div className="bg-white shadow-md rounded-lg p-5 mt-4">

                        <p className="text-xl font-semibold">
                            Name: {me.user.name}
                        </p>

                        <p className="text-gray-700">
                            Email: {me.user.email}
                        </p>

                    </div>

                )}

            </div>

        </div>
    );
};

export default Profile;