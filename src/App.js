import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AboutMe from './components/AboutMe';
import DarkNaught from './components/DarkNaught';
import Weapons from './components/Weapons';
import Droids from './components/Droids';
import Affiliations from './components/Affiliations';
import Acquisitions from './components/Acquisitions';
import Deliveries from './components/Deliveries';
import Removals from './components/Removals';
import Services from './components/Services';
import Bounties from './components/Bounties';
import MainView from './views/MainView';


function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/mainview' element={<MainView />} />
                    <Route path='/' element={<Dashboard />} default />
                    <Route path='/aboutme' element={<AboutMe />} />
                    <Route path='/darknaught' element={<DarkNaught />} />
                    <Route path='/weapons' element={<Weapons />} />
                    <Route path='/droids' element={<Droids />} />
                    <Route path='/affiliations' element={<Affiliations />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/acquisitions' element={<Acquisitions />} />
                    <Route path='/deliveries' element={<Deliveries />} />
                    <Route path='/removals' element={<Removals />} />
                    <Route path='/bounties' element={<Bounties />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;