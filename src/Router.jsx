import { createBrowserRouter } from "react-router-dom";
import App from "./App";




const routes = [
    {
        path: "/",
        element: <App />,
        children: [{

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
