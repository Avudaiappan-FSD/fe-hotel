import { Outlet } from 'react-router-dom';
import Layout from './layouts/Layout';
import { toast } from 'react-toastify';

const App = () => {
  toast.error("Welcome to the Hotel Management System!");
  return (
    <Layout>
      <Outlet />
    </Layout>

  )
}

export default App

