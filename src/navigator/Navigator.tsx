import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../helpers/routes";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
import SignUp from "../views/SignUp/SignUp";
import Contact from "../views/Contact/Contact";
import CreateOrganization from "../views/CreateOrganization/CreateOrganization";
import CreateTourney from "../views/CreateTourney/CreateTourney";
import DashBoard from "../views/DashBoard/DashBoard";
import Organizer from "../views/Organizer/Organizer";
import TournamentStaff from "../views/TournamentStaff/TournamentStaff";
import Tourneys from "../views/Tourneys/Tourneys";
import Results from "../views/Results/Results";
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
            <Route
                path={routes.signup}
                element={<SignUp />}
            />
            <Route
                path={routes.contact}
                element={<Contact />}
            />
            <Route
                path={routes.createOrganizacion}
                element={<CreateOrganization />}
            />
            <Route
                path={routes.createTourney}
                element={<CreateTourney />}
            />
            <Route
                path={routes.dashboard}
                element={<DashBoard />}
            />
            <Route
                path={routes.organizer}
                element={<Organizer />}
            />
            <Route
                path={routes.tournamentstaff}
                element={<TournamentStaff />}
            />
            <Route
                path={routes.tourneys}
                element={<Tourneys />}
            />
            <Route
                path={routes.tourneysCreated}
                element={<Results />}
            />
        </Routes>
     );
}
 
export default Navigator;