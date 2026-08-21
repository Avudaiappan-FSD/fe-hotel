import { useEffect } from "react";
import authServices from "../services/authServices";
import { toast } from "react-toastify";
import { useRevalidator } from "react-router-dom";
import { useLoaderData } from "react-router-dom";



const Logout = () => {

  const revalidator = useRevalidator();
  const user = useLoaderData();
  console.log(user);

  const logoutuser = async () => {
    try {
      const response = await authServices.logout();
      if (response.status === 200) {
        toast.success(response.data.message);
        await revalidator.revalidate();
        setTimeout(() => {
          window.location.href = "/"; // Redirect to login page after logout
        }, 1000);


      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  useEffect(() => {
    logoutuser();
  }, []);

  return (
    <div>logout.....</div>
  )
}

export default Logout;
