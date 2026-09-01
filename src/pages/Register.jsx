import { useDispatch, useSelector } from "react-redux"
import { setName, setEmail, setPassword, selectName, selectEmail, selectPassword } from "../redux/features/auth/registerslice"
import authServices from "../services/authServices";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Register = () => {
  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleregister = async (e) => {
    e.preventDefault();
    console.log('registering...');
    try {
      const response = await authServices.register({ name, email, password });
      if (response.status === 200) {
        console.log('registered successfully');
        dispatch(setName(''));
        dispatch(setEmail(''));
        dispatch(setPassword(''));
        setTimeout(() => {
          navigate('/login');
        }, 300);

      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className='max-w-xs mx-auto mt-20 p-4 border rounded'>
      <h2 className='text-xl mb-4'>Register</h2>
      <form className='flex flex-col space-y-3' onSubmit={handleregister}>
        <input name='name' type='text' placeholder='Name' className='border p-2 rounded' value={name || ""} onChange={(e) => dispatch(setName(e.target.value))} />
        <input name='email' type='email' placeholder='Email' className='border p-2 rounded' value={email || ""} onChange={(e) => dispatch(setEmail(e.target.value))} />
        <input name='password' type='password' placeholder='Password' className='border p-2 rounded' value={password || ""} onChange={(e) => dispatch(setPassword(e.target.value))} />
        <button type='submit' className='bg-blue-500 border p-2 rounded text-white font-bold'>Register</button>
      </form>
    </div>
  )
}

export default Register
