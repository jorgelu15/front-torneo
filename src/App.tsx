import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './views/Login/Login';
import Header from './component/Header/Header';
import SignUp from './views/SignUp/SignUp';
import CreateOrganization from './views/CreateOrganization/CreateOrganization';
import Contact from './views/Contact/Contact';
import TournamentStaff from './views/TournamentStaff/TournamentStaff';
import CreateTourney from './views/CreateTourney/CreateTourney';
import Home from './views/Home/Home';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Outlet></Outlet>
    </div>
  );
}

export default App;
