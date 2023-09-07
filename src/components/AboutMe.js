import React from 'react';
import '../components/style.css';
import { Link } from 'react-router-dom';




const AboutMe = () => {
    return (
        <div className=''  >
            <div >
                <p> My name is Ers QOrr I am a bounty hunter</p>
            </div>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default AboutMe;