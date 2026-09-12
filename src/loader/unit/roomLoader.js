import roomServices from "../../services/roomServices";

const roomLoader = async ({params}) => {
    try {
        const response = await roomServices.getroombyid(params.id);
        return response.data
    } catch (error) {
        // return null;
        console.log(error);
        
    }
}
export default roomLoader