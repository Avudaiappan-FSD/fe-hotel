import instance from "./instance"

const bookingServices = {
    createBooking: async (data) => {
        return await instance.post('/book/bookings', data);
    },
    getmybookings: async (id) => {
        return await instance.get(`/book/bookings/user/${id}`);
    },
    getallBookings: async () => {
        return await instance.get('/book/bookings');
    },
    getBookingById: async (id) => {
        return await instance.get(`/book/bookings/${id}`);
    },
    updateBooking: async (data, id) => {
        return await instance.put('/book/bookings/' + id, data);
    },
    deleteBooking: async (id) => {
        return await instance.delete('/book/bookings/' + id)
    },
    checkRoomAvailability: async (roomId, checkInDate, checkOutDate) => {
        return await instance.get("book/availability", { params: { roomId, checkInDate, checkOutDate },});
    },

}

export default bookingServices;