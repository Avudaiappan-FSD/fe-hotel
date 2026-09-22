import bookingServices from "../../services/bookingServices";

const getmybookingsloader = async ({ params }) => {
    try {
        const response = await bookingServices.getmybookings(params.id);
        return response.data;
    } catch (error) {
        return null
    }
}

export default getmybookingsloader