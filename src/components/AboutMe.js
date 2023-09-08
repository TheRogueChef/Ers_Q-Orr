import React from 'react';
import '../components/style.css';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Ers2 from '../images/Ers2.png';


const AboutMe = () => {
    return (
        <div className='AMShell'  >
            <div className='homeLink'>
                <br />
                <Link to='/'>Home</Link>
            </div >
            <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
                <div className='AMLeft'>
                 <p> I am Mandalorian. I was born on the planet of Mandelore.

                 </p>
                </div>
                <div className='AMRight'>
                  <Image className='AMPic' src={Ers2} alt='...'/>
                </div>
                  
            </div>
        </div>
    )
}

export default AboutMe;