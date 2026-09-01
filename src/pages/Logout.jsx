import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authServices from '../services/authServices';
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { clearuser } from "../redux/features/auth/userslice";


const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutuser = async () => {
    try {
      const response = await authServices.logout();
      if (response.status === 200) {
        console.log("logout sucessfully");
        dispatch(clearuser());
        navigate("/", { replace: true });
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  useEffect(() => {
    logoutuser()
  }, [])
  return (
    <div>
      logging out....
    </div>
  )
}

export default Logout
