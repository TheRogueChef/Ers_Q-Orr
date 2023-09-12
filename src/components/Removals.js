import React from 'react';
import '../components/style.css';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import cred from '../images/creditSymbol.png'


const Removals = () => {
    return (
        <div className='Shells'  >
            <p className='shellTitle'>Removals</p>
            <p>My main form payment will need to be in
                <br />
            <Image className='shellCred' src={cred} alt='...'/>
            </p>
            <br />
            <div className='buttons'>
                <Link className='shellHomeLink' to='/'>Home</Link>
                <Link className='shellHomeLink' to='/services'>Services</Link>
            </div>
            <div className='shellBox'>
                <div>
                    <p style={{ textDecoration: 'underline' }}>Basic Removal = 20,000</p>
                    <ul className='li'>includes...
                        <li>3 days dedicated</li>
                        <li>Quiet and stealthy or loud and messy, your choice.</li>
                        <li>1 being only</li>
                        <li>Physical verification</li>
                        <li>2,000 ammunition/fuel</li>
                    </ul>
                </div>
                <div>
                    <p style={{ textDecoration: 'underline' }}>Additional costs</p>
                    <ul className='li'>
                        <li>additional target = 5,000 each</li>
                        <li>additional days = 1,000 per day</li>
                        <li>Political targets = 10,000 additional cost</li>
                        <li>additional ammunition/fuel = 200 per unit</li>
                        <li>Significant ship or weapons damages covered by client</li>
                        <li>extracurricular incursions = cost at my discretion</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Removals;