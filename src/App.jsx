import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <h1>Hello</h1>
  }
];

const router = createBrowserRouter(routes,{
  future:{
    v7_relativeSplatpath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialhydration: true,
    v7_skipActionErrorRevalidation: true,
  
  }
});


const App = () => {
  return (
    <RouterProvider router={router}
    future={{
      v7_startTransition: true,
    }}
    />
  )
}

export default App
