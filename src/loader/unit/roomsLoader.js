import roomServices from "../../services/roomServices";
const roomsLoader = async()=>{
    try{
        const response = await roomServices.getallrooms();
        return response.data;
    }catch(error){
        console.log(error.response.data.message);
    }
}

export default roomsLoader;