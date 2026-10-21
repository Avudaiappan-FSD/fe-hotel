import instance from "./instance";

const paymentServices = {
    createOrder: async (data) => {
        return await instance.post(/payment/create-order, data);
    },
    

}
export default paymentServices;