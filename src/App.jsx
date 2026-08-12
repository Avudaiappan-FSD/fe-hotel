import { Outlet } from 'react-router-dom';
import Layout from './layouts/layout';

const App = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>

  )
}

export default App

