import React from 'react';
import '../components/style.css';
import { Link } from 'react-router-dom';




const Affiliations = () => {
    return (
        <div className=''  >
            <div >
                <p>The people I have worked with</p>
                <p>The people I have dealt with</p>
                <p>Organizations</p>
            </div>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Affiliations;