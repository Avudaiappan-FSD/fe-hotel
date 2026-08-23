import phone from '../assets/images/phone-contact.png';
import insta from '../assets/images/instagram.png';
import fb from '../assets/images/facebook.png';
import twitter from '../assets/images/logos.png';
import pinterest from '../assets/images/pinterest.png';
import youtube from '../assets/images/youtube.png';
import { useNavigate, useLocation, replace } from 'react-router-dom';
import { useEffect, useState } from 'react';
import authServices from '../services/authServices';
import userlogo from '../assets/images/user.png';
import { useSelector } from 'react-redux';
import { selectUser, setUser, clearuser } from '../redux/features/auth/userslice';
import { useDispatch } from 'react-redux';

const Layout = ({ children }) => {
    const location = useLocation();
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [loading, setloading] = useState(true);
    useEffect(() => {
        const getuser = async () => {

            try {
                const response = await authServices.me();
                dispatch(setUser(response.data));
            } catch (error) {
                dispatch(clearuser());
            } finally {
                setloading(false);
            }
        };
        getuser();
    }, [dispatch]);
    const navigate = useNavigate();
    const handlenavlogin = () => {
        navigate('/login');
    }
    const handlenavregister = () => {
        navigate('/register');
    }
    const handlenavlogout = () => {
        dispatch(clearuser());
        navigate('/logout', { replace: true });
    }

    return (

        <div className="min-h-screen flex flex-col">
            <nav className="bg-blue-700 text-white p-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-bold " style={{ fontFamily: "Satisfy", fontSize: "1.55rem", color: "black" }}>  Apple tree  </h1>
                    {
                        user && user.user.role === "customer" && (
                            <div className='flex justify-between items-center'>
                                <>
                                    <input type="text" placeholder="Chennai" className="px-10 py-2 rounded block w-full p-4 pl-1 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                                    <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded ml-2">Search</button>
                                </>
                            </div>
                        )}

                    <div className="flex space-x-4">
                        {loading ? (
                            <button className='hover:bg-blue-800 font-medium px-4 py-2 rounded'>Log Out</button>
                        ) :
                            !user?.user ? (
                                <>
                                    <button onClick={handlenavregister} className='hover:bg-blue-800 font-medium px-4 py-2 rounded'>Register</button>
                                    <button onClick={handlenavlogin} className='hover:bg-blue-800 font-medium px-4 py-2 rounded'>SignIn</button>
                                </>
                            ) : (

                                <>
                                    <button onClick={handlenavlogout} className='hover:bg-blue-800 font-medium px-4 py-2 rounded'>Log Out</button>
                                    <button>
                                        <img src={userlogo} alt="logo" className="inline-block h-8 w-8 ml-2" />
                                    </button>
                                </>
                            )
                        }

                    </div>
                </div>
            </nav>


            <main className="flex-grow p-4">
                {children}
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                <h1 className='font-bold' style={{ fontFamily: "" }}>Apple tree tamilnadu's leading hotels and homes</h1>
                &copy; 2024 Hotel Management System. All rights reserved.
                <p>contact us: info@appletree.com</p>
                <img src={phone} alt="Logo" className="inline-block h-8 w-8 ml-2" />0462-9887634211
                <p>mail: info@appletree@gmail.com</p>
                <img src={insta} alt="Logo" className="inline-block h-8 w-8 ml-2" />
                <img src={fb} alt="Logo" className="inline-block h-8 w-8 ml-2" />
                <img src={twitter} alt="Logo" className="inline-block h-8 w-8 ml-2" />
                <img src={pinterest} alt="Logo" className="inline-block h-8 w-8 ml-2" />
                <img src={youtube} alt="Logo" className="inline-block h-8 w-8 ml-2" />
            </footer>

        </div >
    )
}


export default Layout;
