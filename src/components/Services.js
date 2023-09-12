import React from 'react';
import '../components/style.css';
import { Link } from 'react-router-dom';




const Services = () => {
    return (
        <div className='servShell'  >
            <br />
            <p className='servTitle'>Services</p>
            <Link className='servHomeLink' to='/'>Home</Link>
            <br /><br />
            <p className='servPara'>
                I specialize in acquisitions, deliveries and removals. I can accommodate many other requests, you only need to ask......and pay.
            </p>
            <br /><br />
            <div className='servBox' >
                <Link className='servLink' to='/acquisitions'>Acquisitions</Link>
                <hr />
                <Link className='servLink' to='/deliveries'>Deliveries</Link>
                <hr />
                <Link className='servLink' to='/removals'>Removals</Link>
            </div>
            
        </div>
    )
}

export default Services;