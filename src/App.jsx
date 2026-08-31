import { Outlet, useLoaderData } from 'react-router-dom';
import Layout from './layouts/Layout';


const App = () => {
  const users = useLoaderData()
  console.log(users)
 
return (
  <Layout>
    <Outlet />
  </Layout>

)
}

export default App

