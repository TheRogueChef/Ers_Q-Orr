import React from 'react';
import '../components/style.css';
import { Link } from 'react-router-dom';




const Droids = () => {
    return (
        <div className=''  >
            <div >
                <p>The droids I have worked with</p>
            </div>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Droids;