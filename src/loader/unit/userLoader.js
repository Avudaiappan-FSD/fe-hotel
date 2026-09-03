import userServices from "../../services/userServices";

const userLoader = async () => {
    try {
        const response = await userServices.getprofile();
        return response.data;
    } catch (error) {
        console.log(error);
        return null;

    }
}

export default userLoader;