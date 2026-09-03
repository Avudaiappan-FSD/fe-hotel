import { createBrowserRouter, useLoaderData } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Roomlist from "./pages/Roomlist";
import roomsLoader from "./loader/unit/roomsLoader";
import authloader from "./loader/unit/authLoader"
import Profile from "./pages/Profile";
import userLoader from "./loader/unit/userLoader";
const routes = [
    {
        path: "/",
        element: <App />,
        loader: authloader,
        children: [
            { path: "", element: <Home /> },
            { path: "register", element: <Register /> },
            { path: "login", element: <Login /> },
            { path: "logout", element: <Logout /> },
            {
                path: "Roomlist", element: <Roomlist />,
                loader: roomsLoader,
            },
            {
                path: "Profile", element: <Profile />,
                loader: userLoader,
            },

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
