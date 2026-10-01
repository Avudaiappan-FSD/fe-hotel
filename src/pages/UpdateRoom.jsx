import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import roomServices from "../services/roomServices";

const UpdateRoom = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    roomnumber: "",
    roomtype: "",
    price: "",
    capacity: "",
    description: "",
    location: "",
  });

  const [loading, setLoading] = useState(true);

  // Get existing room details
  useEffect(() => {
    const getRoom = async () => {
      try {
        const response = await roomServices.getroombyid(id);

        console.log("Room data:", response.data);

        const room = response.data.room || response.data;

        setForm({
          roomnumber: room.roomnumber || "",
          roomtype: room.roomtype || "",
          price: room.price || "",
          capacity: room.capacity || "",
          description: room.description || "",
          location: room.location || "",
        });

        setLoading(false);
      } catch (error) {
        console.log("Error getting room:", error);
        setLoading(false);
      }
    };

    getRoom();
  }, [id]);

  // Input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Update room
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await roomServices.updateroom(form, id);

      console.log("Room updated:", response.data);

      alert("Room updated successfully!");

      navigate(`/rooms/${id}`);
    } catch (error) {
      console.log("Error updating room:", error);
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 mb-10 p-6 border rounded-xl shadow-md">

      <h1 className="text-2xl font-bold mb-6">
        Update Room
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Room Number */}
        <input
          type="text"
          name="roomnumber"
          placeholder="Enter Room Number"
          value={form.roomnumber}
          onChange={handleChange}
          className="w-full border rounded-md p-3"
        />

        {/* Room Type */}
        <input
          type="text"
          name="roomtype"
          placeholder="Enter Room Type"
          value={form.roomtype}
          onChange={handleChange}
          className="w-full border rounded-md p-3"
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Enter Room Price"
          value={form.price}
          onChange={handleChange}
          className="w-full border rounded-md p-3"
        />

        {/* Capacity */}
        <input
          type="number"
          name="capacity"
          placeholder="Enter Room Capacity"
          value={form.capacity}
          onChange={handleChange}
          className="w-full border rounded-md p-3"
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Enter Room Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border rounded-md p-3"
          rows="4"
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Enter Room Location"
          value={form.location}
          onChange={handleChange}
          className="w-full border rounded-md p-3"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-md p-3 hover:bg-blue-700"
        >
          Update Room
        </button>

      </form>
    </div>
  );
};

export default UpdateRoom;