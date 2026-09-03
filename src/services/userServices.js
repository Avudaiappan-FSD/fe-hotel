import instance from "./instance";;

const userServices = {
    getprofile: async()=>{
        return await instance.get('/user/profile');
    },
    updateprofile:async(data)=>{
        return await instance.put('/user/profile',data);
    },
    deleteprofile: async()=>{
        return await instance.delete('/user/profile');
    }
}
export default userServices;    