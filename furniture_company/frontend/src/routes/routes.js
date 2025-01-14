import {createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import {routesElements} from "./routesElements.jsx";


export const router = createBrowserRouter(createRoutesFromElements(routesElements))