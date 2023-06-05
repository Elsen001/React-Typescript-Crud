import App from "../App";
import Form from "../pages/Form";
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    
]);

export default router