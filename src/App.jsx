import { Outlet } from 'react-router-dom';
import Layout from './layouts/Layout';

const App = () => {
 
  return (
    <Layout>
      <Outlet />
    </Layout>

  )
}

export default App

