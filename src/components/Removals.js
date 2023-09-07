import React from 'react';
import '../components/style.css';
import { Link } from 'react-router-dom';




const Removals = () => {
    return (
        <div className=''  >
            <div >
                <p>The target will be removed.</p>
            </div>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Removals;