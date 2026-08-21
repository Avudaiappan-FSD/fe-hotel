import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { selectEmail, selectPassword } from "../redux/features/auth/loginslice";
import { setEmail, setPassword } from "../redux/features/auth/loginslice";
import authServices from "../services/authServices";


const Login = () => {
    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);
    const dispatch = useDispatch();
    const navigate = useNavigate();
const handlelogin = async (e) => {
    await e.preventDefault()
    console.log('Login button clicked');
    // Handle login logic here
   try{
      const response = await authServices.login({ email, password });
      if(response.status === 200) {
        toast.success(`Login Successfully`);
        dispatch(setEmail(''));
        dispatch(setPassword(''));
        navigate('/');
      }
   }catch(err){
    toast.error(err.response.data.message);
   }
  }

    return (
        <div className='max-w-md mx-auto mt-20 p-4 border rounded shadow'>
            <h2 className='text-xl mb-5 font-bold'>Login</h2>
            <form className='flex flex-col space-y-3'>
                <div className='mb-4'>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                        Email
                    </label>
                    <input
                        type='email'
                        id='email'
                        className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                        onChange={e=>dispatch(setEmail(e.target.value))}
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                        Password
                    </label>
                    <input
                        type='password'
                        id='password'
                        className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
                        onChange={e=>dispatch(setPassword(e.target.value))}
                    />
                </div>
                <button
                    type='submit'onClick={handlelogin}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded'
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login
