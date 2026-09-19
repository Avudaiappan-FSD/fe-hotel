import instance from "./instance"

const bookingServices = {
    createBooking: async (data) => {
        return await instance.post('/book/bookings', data);
    },
    getmybookings: async () => {
        return await instance.get('/book/bookings');
    },
    getallBookings: async () => {
        return await instance.get('/book/bokings');
    },
    getBookingById: async (id) => {
        return await instance.get(`/book/bookings/${id}`);
    },
    updateBooking: async (data, id) => {
        return await instance.put('/book/bookings' + id, data);
    },
    deleteBooking: async (id) => {
        return await instance.delete('/book/bookings' + id)
    }

}

export default bookingServices;