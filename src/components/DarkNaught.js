import React from 'react';
import '../components/style.css';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import FullScreenImage from '../components/FullScreenImage';
import ScrollToTopButton from '../components/ScrollToTopButton';
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
            <h1 style={{ textShadow: '.1rem .1rem red' }}>The Dark Naught</h1>
            <div className='DNDesc'>
                <div>
                    <p style={{ textDecoration: 'underline' }}>Modifications</p>
                    <ul>
                        <li>Solo pilot capable</li>
                        <li>Cloaking ( Imperial format )</li>
                        <li>Reinforced hull ~ ramming capabilities</li>
                        <li>4 hidden controlled environments</li>
                        <li>2 holding cells (energy shield)</li>
                    </ul>
                </div>
                <div>
                    <p style={{ textDecoration: 'underline' }}>Arsenal</p>
                    <ul>
                        <li>Double laser turrets (dorsal/ventral)</li>
                        <li>Medium ion cannon</li>
                        <li>Plasma charges</li>
                        <li>Seismic charges</li>
                        <li>Tracking darts</li>
                    </ul>
                </div>
            </div>
            <Link className='shellHomeLink' to='/'>Home</Link>
            <div className='DNCase'>
                <div >
                    <FullScreenImage className='shipPics2' imageUrl={Schem1}>
                        <Image src={Schem1} alt='...' />
                    </FullScreenImage>
                    <br /><br />
                    <FullScreenImage className='shipPics2' imageUrl={DN1}>
                        <Image src={DN1} alt='...' />
                    </FullScreenImage>
                    <br /><br />
                    <FullScreenImage className='shipPics2' imageUrl={DN4}>
                        <Image src={DN4} alt='...' />
                    </FullScreenImage>
                </div>
                <div>
                    <FullScreenImage className='shipPics4' imageUrl={DK5}>
                        <Image src={DK5} alt='...' />
                    </FullScreenImage>
                    <br /><br />
                    <FullScreenImage className='shipPics' imageUrl={DN3}>
                        <Image src={DN3} alt='...' />
                    </FullScreenImage>
                    <br /><br />
                    <FullScreenImage className='shipPics' imageUrl={DNCockpit}>
                        <Image src={DNCockpit} alt='...' />
                    </FullScreenImage>
                </div>
                <div>
                    <FullScreenImage className='shipPics2' imageUrl={Schem2}>
                        <Image src={Schem2} alt='...' />
                    </FullScreenImage>
                    <br /><br />
                    <FullScreenImage className='shipPics2' imageUrl={DN2}>
                        <Image src={DN2} alt='...' />
                    </FullScreenImage>
                    <br /><br />
                    <FullScreenImage className='shipPics3' imageUrl={Schem3}>
                        <Image src={Schem3} alt='...' />
                    </FullScreenImage>
                </div>
                <ScrollToTopButton />
            </div>
        </div>
    )
}

export default DarkNaught;