import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import authLoader from "./loader/unit/authLoader";
import Logout from "./pages/Logout";




const routes = [
    {
        path: "/",
        element: <App />,
        loader: authLoader,
        children: [
            { path: "", element: <Home /> },
            { path: "register", element: <Register /> },
            { path: "login", element: <Login /> },
            { path: "logout", element: <Logout /> },

        ],

        hydrateFallbackElement: <div>Loading...</div>
    }
];

const router = createBrowserRouter(routes, {
    future: {
        v7_relativeSplatpath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialhydration: true,
        v7_skipActionErrorRevalidation: true,

    }
});


export default router;
