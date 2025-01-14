import {StrictMode} from "react";
import {createRoot} from 'react-dom/client'
import "./style.css"
import {Footer} from "./components/Footer/index.js";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/routes.js";
import {ReqisterForm} from "./components/ReqisterForm/index.js";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
        <Footer/>
    </StrictMode>
)