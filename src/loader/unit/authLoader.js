import authServices from "../../services/authServices";

const authLoader = async () => {
    try {
        const response = await authServices.me();
        return response.data; // Return the user data if authenticated
    } catch (error) {
        return null; // Return null if not authenticated
    };
}

export default authLoader;
