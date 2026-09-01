import { useDispatch, useSelector } from 'react-redux'
import { setEmail, setPassword, selectEmail, selectPassword } from '../redux/features/auth/loginslice'
import authServices from '../services/authServices';
import { replace, useNavigate } from 'react-router-dom';
import { setUser } from '../redux/features/auth/userslice';


const Login = () => {

  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const response = await authServices.login({ email, password });
      if (response.status === 200) {
        console.log("login successfully");
        const response = await authServices.me();
        dispatch(setUser(response.data));
        dispatch(setEmail(''));
        dispatch(setPassword(''));
        navigate('/roomlist', { replace: true });

      }
    } catch (error) {
      console.log(error.response.data.message);

    }
  }

  return (
    <div className='max-w-xs mx-auto mt-20 p-4 border rounded'>
      <h2 className='text-xl mb-4'>Login</h2>
      <form className='flex flex-col space-y-3' onSubmit={handlelogin}>
        <input name='email' type='email' placeholder='Email' className='border p-2  rounded ' value={email} onChange={(e) => dispatch(setEmail(e.target.value))} />
        <input name='password' type='password' placeholder='Password' className='border p-2  rounded' value={password} onChange={(e) => dispatch(setPassword(e.target.value))} />
        <button className='bg-blue-500 border p-2 rounded text-white font-bold'>Login</button>
      </form>
    </div>
  )
}

export default Login
