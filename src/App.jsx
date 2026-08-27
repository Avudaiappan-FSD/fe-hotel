import { Outlet } from 'react-router-dom';
import Layout from './layouts/Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { clearuser,setUser } from './redux/features/auth/userslice';
import authServices from './services/authServices';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await authServices.me();
        if (response.status === 200) {
          dispatch(setUser(response.data));
        }
      } catch(error) {
       dispatch(clearuser());
      }
    };
    getCurrentUser();
},[dispatch])
return (
  <Layout>
    <Outlet />
  </Layout>

)
}

export default App

