import instance from "./instance";

const roomServices = {
    createroom: async(data)=>{
        return await instance.post('/rooms/rooms',data);
    },
    getallrooms: async()=>{
        return await instance.get('rooms/rooms');
    },
    available: async()=>{
        return await instance.get('rooms/rooms/available');
    },
    searchrooms: async(data)=>{
        return await instance.post('rooms/rooms/search',data);
    },
}

export default roomServices;