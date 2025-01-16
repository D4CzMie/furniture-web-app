import {Route} from "react-router-dom";
import {MainPage} from "../pages/mainPage.jsx";
import {FurniturePage} from "../pages/furniturePage.jsx";
import {AboutPage} from "../pages/aboutPage.jsx";
import {ListFurnitures} from "../components/ListFurnitures/ListFur.jsx";

export const routesElements = (
    <Route>
        <Route index element={<MainPage/>}/>
        <Route path="furniture" element={<FurniturePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="furniture/list" element={<ListFurnitures/>}/>
    </Route>

)