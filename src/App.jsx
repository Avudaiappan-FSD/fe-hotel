import { Outlet, useLoaderData } from 'react-router-dom';
import Layout from './layouts/Layout';

const App = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <Layout>
      <Outlet />
    </Layout>

  )
}

export default App

