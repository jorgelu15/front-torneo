import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../helpers/routes";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
const Navigator = () => {
    return ( 
        <Routes>
            <Route
                path={routes.home}
                element={<Home />}
            />
            <Route
                path={routes.login}
                element={<Login />}
            />
        </Routes>
     );
}
 
export default Navigator;