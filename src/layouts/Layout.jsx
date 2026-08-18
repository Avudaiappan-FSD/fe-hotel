import phone from '../assets/images/phone-contact.png';
import appletree from '../assets/images/tree.png';
import insta from '../assets/images/instagram.png';
import fb from '../assets/images/facebook.png';
import twitter from '../assets/images/logos.png';
import pinterest from '../assets/images/pinterest.png';
import youtube from '../assets/images/youtube.png';
import { Link } from 'react-router-dom';
import user from '../assets/images/user.png';

const Layout = ({ children }) => {

    return (

        <div className="min-h-screen flex flex-col">
            <nav className="bg-blue-900 text-white p-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-bold ">Apple tree<img src={appletree} alt="Logo" className="inline-block h-8 w-8 ml-2" />  </h1>
                    <div className="flex space-x-4">
                        <Link to ="/register" className="hover:underline font-medium">Register</Link>
                        <Link to="/login" className="hover:underline font-medium">SignIn</Link>
                        <button><img src={user} alt="User" className="inline-block h-8 w-8 ml-2" /></button>
                    </div>
                </div>
            </nav>


            <main className="flex-grow p-4">
                {children}
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                <h1 className='font-bold'>Apple tree tamilnadu's leading hotels and homes</h1>
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
