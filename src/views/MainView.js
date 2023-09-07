import React from 'react';
import Dashboard from '../components/Dashboard';
import AboutMe from '../components/AboutMe'
import '../components/style.css';
import { Element } from 'react-scroll';
import ScrollToTopButton from '../components/ScrollToTopButton';



const MainView = (props) => {
    return (
        <div>
            <Element name='top'>
                <Dashboard />
            </Element>
            <br />
            <Element name='aboutme'>
                <AboutMe />
            </Element>
            <ScrollToTopButton />
        </div>
    )
}
export default MainView;