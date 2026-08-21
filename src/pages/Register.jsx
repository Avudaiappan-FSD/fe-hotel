import { useDispatch, useSelector } from "react-redux";
import { selectName, selectEmail, selectPassword } from "../redux/features/auth/registerslice";
import { setName, setEmail, setPassword } from "../redux/features/auth/registerslice";
import { toast } from "react-toastify";
import authServices from "../services/authServices";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleregister = async (e) => {
    await e.preventDefault()
   
    try {
      const response = await authServices.register({ name, email, password });
      if(response.status === 200) {
        toast.success(`Register Successfully`);
        dispatch(setName(''));
        dispatch(setEmail(''));
        dispatch(setPassword(''));
        navigate('/login');
      }
    
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }


  return (
    <div className='max-w-md mx-auto mt-20 p-4  border rounded shadow'>
      <h2 className='text-xl mb-5 font-bold'>Register</h2>
      <form className='flex flex-col space-y-3'>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
            Name
          </label>
          <input
            type='text'
            id='name'
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
            // value={name}
            onChange={(e) => dispatch(setName(e.target.value))}

          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
            // value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
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
            // value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
        </div>
        <button
          type='submit' onClick={handleregister}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
