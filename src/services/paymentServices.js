import instance from "./instance";

const paymentServices = {
    createOrder: async (data) => {
        return await instance.post('/payment/createorder', data);
    },
    verifyPayment: async (data) => {
        return await instance.post('/payment/verifypayment', data);
    },
    getMypayments: async (data) => {
        return await instance.get('/payment/mypayments', data);
    },
    getPaymentById: async (id) => {
        return await instance.get(`/payment/${id}`);
    },
    getAllPayments: async (data) => {
        return await instance.get('/payment/allpayments', data);
    },
    updatePaymentStatus: async (data, id) => {
        return await instance.put(`/payment/${id}/status` + data, id)
    }

}
export default paymentServices;