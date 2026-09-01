import { Outlet, useLoaderData } from 'react-router-dom';
import Layout from './layouts/Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearuser,setUser} from './redux/features/auth/userslice';

const App = () => {
  const user = useLoaderData();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    } else {
      dispatch(clearuser());
    }
  }, [user])

  return (
    <Layout>
      <Outlet />
    </Layout>

  )
}

export default App

