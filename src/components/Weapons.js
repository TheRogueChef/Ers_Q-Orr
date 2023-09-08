import React from 'react';
import '../components/style.css';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import FullScreenImage from '../components/FullScreenImage';
import Rifle from '../images/Rifle.png';
import Blaster from '../images/Blaster.png';
import VibroBlade from '../images/VibroBlade.png';
import PloKoonSabre from '../images/PloKoonSabre.png';
import Vambrance from '../images/Vambrance.png';


const Weapons = () => {
    return (
        <div className='weaponShell'>
            <h1 style={{ textShadow: '.1rem .1rem red' }}>Weapons of Choice</h1>
            <p style={{ fontFamily: 'QuickerMachine', fontSize: '2rem' }}>My weapons have been modified for speed and silence. My rifle is a modified phase~pulse blaster rifle. My side arm is a dependable and quite lethal modified RSKF~44 heavy blaster. My lightsabre once belonged to the jedi master Plo Koon. It was given to me as payment for delivery in a rebel incursion with a little special help. My vambrance (one of several) boasts many of the traditional capabilities such as a flamethrower, 25~meter retractable fibre cord, and an energy shield projector. In addition to these standards I have added some extra touches like trackers (all sensory specific), whistle birds, repulsers, MM9 mini concussion rockets and tranquilizer/expolosive darts. </p>
            <Link className='homeLink' to='/'>Home</Link>
            <br /><br />
            <div className='weaponCase'  >
                <div className='caseLeft'>
                    <br /><br />
                    <h2>Amban Sniper Rifle</h2>
                    <FullScreenImage className='weaponShelf' imageUrl={Rifle}>
                        <Image src={Rifle} alt='...' />
                    </FullScreenImage>
                </div>
                <div className='caseMid'>
                    <br /><br /><br />
                    <h2 style={{ marginLeft: '30%' }}>IB Blaster</h2>
                    <FullScreenImage className='blaster' imageUrl={Blaster}>
                        <Image src={Blaster} alt='...' />
                    </FullScreenImage>
                    <br /><br /><br />
                    <div style={{ marginLeft: '10%' }}>
                        <h2 style={{ marginLeft: '30%' }}>Lightsaber</h2>
                        <FullScreenImage className='sabre' imageUrl={PloKoonSabre}>
                            <Image src={PloKoonSabre} alt='...' />
                        </FullScreenImage>
                    </div>
                    <br /><br />
                    <div style={{ marginLeft: '10%' }}>
                        <h2 style={{ marginLeft: '30%' }}>Vambrance</h2>
                        <FullScreenImage className='vambrance' imageUrl={Vambrance}>
                            <Image src={Vambrance} alt='...' />
                        </FullScreenImage>
                    </div>
                </div>
                <div className='caseRight'>
                    <br /><br />
                    <h2>VibroBlade</h2>
                    <FullScreenImage className='blade' imageUrl={VibroBlade}>
                        <Image src={VibroBlade} alt='...' />
                    </FullScreenImage>
                </div>
            </div>
        </div>
    )
}

export default Weapons;