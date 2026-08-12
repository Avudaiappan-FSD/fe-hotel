import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Children } from "react";

const routes = [
    {
        path: "/",
        element: <App />,
        Children: [{

        }]
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
