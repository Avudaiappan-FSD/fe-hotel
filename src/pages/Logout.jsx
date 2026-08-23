import { useEffect } from "react";
import authServices from "../services/authServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearuser } from "../redux/features/auth/userslice";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const logoutuser = async () => {
      try {
        const response = await authServices.logout();

        if (response.status === 200) {
          toast.success("Logout successfully");
        }

      } catch (error) {
        console.log("Logout error:", error);
      } finally {
        // Redux user clear
        dispatch(clearuser());

        // Home page
        navigate("/", { replace: true });
      }
    };

    logoutuser();
  }, [dispatch, navigate]);

  return <div>Logout.....</div>;
};

export default Logout;