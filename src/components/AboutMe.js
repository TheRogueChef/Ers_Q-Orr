import React from 'react';
import '../components/style.css';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Ers2 from '../images/Ers2.png';


const AboutMe = () => {
    return (
        <div className='AMShell'  >
            <div>
                <br /><br />
                <Link className='homeLink2' to='/'>Home</Link>
            </div >
            <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
                <div className='AMLeft'>
                 <p>I am Ers Q"Orr</p>   
                 <p> I was born on 32.1.27 BBY in Ronion, Mandalore, well before the proclamation of Mandalores neutrality. However, soon afterwards my parents saw life in the bio~dome was not sustainable. My family took up residence on the moon of Concordia soon after the living conditions became so dire in Ronion. The time on Concordia was short lived due to influence from The Watch and soon afterwards my family moved to Celanon.</p>
                 <p>My father, Dal Q"Orr worked closely with the Mera Mal on smuggling supplies to Ronion and continued working within the smuggling community throughout his life. I learned the business of smuggling from him and during this time I developed my piloting skills as an evasive flyer, often flying distraction missions. I led officers on wild rides all throughout the outer rim. My father died quietly and without fanfare at his home in Celanon.</p>
                 <p>My Mother, Mydlas Kystra would often work as an assassin, but once my brother and I were born she focused on raising us and training us. Her time in the removal business offered us many safe harbors during our smuggling missions. She believed that the business of removal was intimate and necessary. She treated each removal with reverance and applied the removal, in most cases, with an up close Vibroblade. My mother died at the hands of my brother as she slept.</p>
                 <p>My brother was Shal Q"Orr who has followed the New Order and he will pay for the death of our mother.</p>
                </div>
                <div className='AMRight'>
                  <Image className='AMPic' src={Ers2} alt='...'/>
                </div>
                  
            </div>
        </div>
    )
}

export default AboutMe;