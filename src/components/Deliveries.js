import React from 'react';
import '../components/style.css';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import cred from '../images/creditSymbol.png'


const Deliveries = () => {
    return (
        <div className='Shells'  >
            <p className='shellTitle'>Deliveries</p>
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
                    <p style={{ textDecoration: 'underline' }}>Basic Delivery = 5,000</p>
                    <ul className='li'>includes...
                        <li>3 days dedicated</li>
                        <li>Appropriate protections</li>
                        <li>Stable storage facility</li>
                        <li>Rations/quarters for 1 standard humanoid</li>
                        <li>2,000 ammunition/fuel</li>
                    </ul>
                </div>
                <div>
                    <p style={{ textDecoration: 'underline' }}>Additional costs</p>
                    <ul className='li'>
                        <li>additional crew = 2,000 each</li>
                        <li>additional days = 1,000 per day</li>
                        <li>additional storage facility = 500 per unit</li>
                        <li>additional R/Q = 500 per day per being</li>
                        <li>additional ammunition/fuel = 200 per unit</li>
                        <li>extracurricular incursions = cost at my discretion</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Deliveries;