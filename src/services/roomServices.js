import instance from "./instance";

const roomServices = {
    createroom: async (data) => {
        return await instance.post('/rooms/rooms', data);
    },
    getallrooms: async () => {
        return await instance.get('rooms/rooms');
    },
    available: async () => {
        return await instance.get('rooms/rooms/available');
    },
    searchrooms: async (data) => {
        return await instance.post('rooms/search', data);
    },
    getroombylocation: async (data) => {
        return await instance.get('rooms/rooms/location/' + data);
    },
    getroombyid: async (data) => {
        return await instance.get('rooms/rooms/' + data);
    },
    updateroom: async (data, id) => {
        return await instance.put('rooms/rooms/' + id, data);
    },
    deleteroom: async (id) => {
        return await instance.delete('rooms/rooms/' + id);
    }
}

export default roomServices;