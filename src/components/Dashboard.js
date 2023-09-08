import React from 'react';
import './style.css';
import { Image } from 'react-bootstrap';
import Ers from '../images/ErsFull.png';
import Myth from '../images/Mythosaur.jpg';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import DropdownLink from './DropDownLink';

const Dashboard = (props) => {

    return (
        <div className='dashShell'>
            <MobileMenu />
            <div className='navBar'>  
                <br/>
                <h1 className= 'name'>Ers Q"Orr</h1>
                <h1 style={{ textShadow: '.1rem .1rem red'}}>Specializing in acquisitions and removals</h1>
                <br/><br/><br/>
                <Image className='MythPic' src={Myth} alt='...'/>
                <br/><br/><br/><br/><br/>
                <Link className='navLink' to='/aboutme'>Lineage</Link>
                <br/><br/><br/><br/><br/>
                <Link className='navLink' to='/darknaught'>The Dark Naught</Link>
                <br/><br/><br/><br/><br/>
                <Link className='navLink' to='/weapons'>Weapons</Link>
                <br/><br/><br/><br/><br/>
                <Link className='navLink' to='/droids'>Droids</Link>
                <br/><br/><br/><br/><br/>
                <Link className='navLink' to='/affiliations'>Affiliations</Link>
                <br/><br/><br/><br/><br/>
                <Link className='navLink' to='/bounties'>Bounties</Link>
                <br/><br/><br/><br/><br/>
                <DropdownLink />
                <br/><br/><br/><br/><br/>
            </div>
            <div className='ErsFullPic'>
                <Image src={Ers} alt='...'/> 
            </div>
        </div>
    )
}

export default Dashboard;