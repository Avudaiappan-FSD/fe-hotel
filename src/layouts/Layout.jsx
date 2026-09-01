import phone from '../assets/images/phone-contact.png';
import insta from '../assets/images/instagram.png';
import fb from '../assets/images/facebook.png';
import twitter from '../assets/images/logos.png';
import pinterest from '../assets/images/pinterest.png';
import youtube from '../assets/images/youtube.png';
import { replace, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/features/auth/userslice';

const Layout = ({ children }) => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    return (
        <div className='min-h-screen flex flex-col'>
            <nav className='bg-red-800 text-white p-4 flex justify-between'>
                <div className='flex flex-grow '>
                    <h2>Apple tree</h2>
                    {!user && <button className='mr-4 flex flex-grow' onClick={() => navigate("/register")}>Register</button>}
                    {!user && <button className='mr-4 flex flex-grow' onClick={() => navigate("/login")}>login</button>}
                </div>
                <div>
                    {
                        user && (
                            <button className='bg-red-500 px-3 py-1 rounded' onClick={() => navigate("/logout", { replace: true })}>Logout</button>
                        )
                    }
                </div>
            </nav>
            <main className="flex-grow p-4">
                {children}
            </main>

            <footer className="bg-gray-800 text-white p-4 text-center">
                <h1 className='font-bold' style={{ fontFamily: "" }}>Apple tree tamilnadu's leading hotels and homes</h1 >
                2024 Hotel Management System.All rights reserved.
                < p > contact us: info @appletree.com</p >
                <img src={phone} alt="Logo" className="inline-block h-8 w-8 ml-2" />0462 - 9887634211
                < p > mail: info @appletree @gmail.com</p >
                <img src={insta} alt="Logo" className="inline-block h-8 w-8 ml-2" />
                <img src={fb} alt="Logo" className="inline-block h-8 w-8 ml-2" />
                <img src={twitter} alt="Logo" className="inline-block h-8 w-8 ml-2" />
                <img src={pinterest} alt="Logo" className="inline-block h-8 w-8 ml-2" />
                <img src={youtube} alt="Logo" className="inline-block h-8 w-8 ml-2" />
            </footer >

        </div >
    )
}


export default Layout;
