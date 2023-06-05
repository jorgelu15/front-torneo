import App from "../App";
import Contact from "../views/Contact/Contact";
import CreateOrganization from "../views/CreateOrganization/CreateOrganization";
import CreateTourney from "../views/CreateTourney/CreateTourney";
import DashBoard from "../views/DashBoard/DashBoard";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
import Organizer from "../views/Organizer/Organizer";
import Results from "../views/Results/Results";
import TourneysCreated from "../views/Results/TourneysCreated";
import SignUp from "../views/SignUp/SignUp";
import TournamentStaff from "../views/TournamentStaff/TournamentStaff";
import Tourneys from "../views/Tourneys/Tourneys";

const router = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/sign-up",
                element: <SignUp />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/create-organizacion",
                element: <CreateOrganization />,
            },
            {
                path: "/create-tourney",
                element: <CreateTourney />,
            },
            {
                path: "/dash-board",
                element: <DashBoard />,
            },
            {
                path: "/organizer",
                element: <Organizer />,
            },
            {
                path: "/tournament-staff",
                element: <TournamentStaff />,
            },
            {
                path: "/tourneys",
                element: <Tourneys />,
            }
        ]
    }, {

        path: "/results",
        element: <Results />,
        children: [
            {
                path: "/results/tourneys-created",
                element: <TourneysCreated />,
            }
        ]
    }
];
export default router;