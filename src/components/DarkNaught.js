import React from 'react';
import '../components/style.css';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import DNCockpit from '../images/DNCockpit.PNG'
import Schem1 from '../images/Schematics1.JPG'
import Schem2 from '../images/Schematics2.JPG'
import Schem3 from '../images/Schematics3.PNG'
import DN1 from '../images/DN1.WEBP'
import DN2 from '../images/DN2.WEBP'
import DN3 from '../images/DN3.WEBP'
import DN4 from '../images/DN4.JPG'
import DK5 from '../images/DK5.PNG'





const DarkNaught = () => {
    return (
        <div className='DNShell'  >
            <h1>The Dark Naught</h1>
            <Link to='/'>Home</Link>
            <div className='DNCase'>
                <div >
                    <Image className='shipPics2' src={Schem1} alt='...' />
                    <br />
                    <Image className='shipPics2' src={DN1} alt='...' />
                    <br />
                    <Image className='shipPics2' src={DN4} alt='...' />
                </div>
                <div>
                    <Image className='shipPics' src={DK5} alt='...' />
                    <br />
                    <Image className='shipPics' src={DN3} alt='...' />
                    <br />
                    <Image className='shipPics' src={DNCockpit} alt='...' />
                </div>
                <div>
                    <Image className='shipPics2' src={Schem2} alt='...' />
                    <br />
                    <Image className='shipPics2' src={DN2} alt='...' />
                    <br />
                    <Image className='shipPics3' src={Schem3} alt='...' />
                </div>
            </div>
        </div>
    )
}

export default DarkNaught;