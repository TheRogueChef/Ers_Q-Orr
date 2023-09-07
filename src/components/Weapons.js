import React from 'react';
import '../components/style.css';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Rifle from '../images/Rifle.png';
import Blaster from '../images/Blaster.png';
import VibroBlade from '../images/VibroBlade.png';
import PloKoonSabre from '../images/PloKoonSabre.png';


const Weapons = () => {
    return (
        <div className='weaponShell'>
            <h1>My Weapons of Choice</h1>
            <Link className='homeLink' to='/'>Home</Link>
            <br /><br />
            <div className='weaponCase'  >
                <div className='caseLeft'>
                <br /><br />
                    <h2>Amban Sniper Rifle</h2>
                    <Image src={Rifle} alt='...'/> 
                </div>
                <div className='caseMid'>
                    <br /><br /><br />
                    <h2>Modified IB Blaster</h2>
                    <Image className='blaster' src={Blaster} alt='...'/> 
                    <br /><br /><br /><br />
                    <h2>Plo Koons Lightsaber</h2>
                    <Image className='sabre' src={PloKoonSabre} alt='...'/> 
                </div>
                <div className='caseRight'>
                <br /><br />
                    <h2>VibroBlade</h2>
                    <Image className='blade' src={VibroBlade} alt='...'/> 
                </div>
            </div>
        </div>
    )
}

export default Weapons;