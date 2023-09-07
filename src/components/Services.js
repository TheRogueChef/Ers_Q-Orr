import React from 'react';
import '../components/style.css';
import { Link } from 'react-router-dom';




const Services = () => {
    return (
        <div className=''  >
            <div >
                <Link to='/acquisitions'>Acquisitions</Link>
                <br /><br />
                <Link to='/deliveries'>Deliveries</Link>
                <br /><br />
                <Link to='/removals'>Removals</Link>
            </div>
            <br />
            <Link to='/'>Home</Link>
            <br />
        </div>
    )
}

export default Services;