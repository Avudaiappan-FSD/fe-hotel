import roomServices from "../../services/roomServices";
const roomLoader = async()=>{
    try{
        const response = await roomServices.getallrooms();
        return response.data;
    }catch(error){
        console.log(error);
    }
}

export default roomLoader;