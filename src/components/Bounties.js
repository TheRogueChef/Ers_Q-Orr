import React from 'react';
import '../components/style.css';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import FullScreenImage from '../components/FullScreenImage';
import asta from '../images/bounties/bounty_asta.png'
import cal from '../images/bounties/bounty_cal.png'
import chagrav from '../images/bounties/bounty_chagrav.jpg'
import dante from '../images/bounties/bounty_dante.png'
import con from '../images/bounties/bounty_con.jpg'
import escanor from '../images/bounties/bounty_escanor.png'
import ewok from '../images/bounties/bounty_ewok.jpg'
import ig88 from '../images/bounties/bounty_ig88.jpg'
import uvo from '../images/bounties/bounty_uvo.jpg'
import jom from '../images/bounties/bounty_jom.jpg'
import koji from '../images/bounties/bounty_koji_koda.png'
import mogg from '../images/bounties/bounty_mogg.jpg'
import nomad from '../images/bounties/bounty_nomad.jpg'
import yami from '../images/bounties/bounty_yami_sukehiro.png'
import zoya from '../images/bounties/bounty_zoya.jpg'






const Bounties = () => {
    return (
        <div className='BShell'  >
            <h1 style={{ color: 'ghostWhite', textShadow: '.1rem .1rem red' }}>Bounties</h1>
           
            <Link className='homeLink2' to='/'>Home</Link>
            <div className='DNCase'>
                <div >
                    <FullScreenImage className='poster' imageUrl={asta}>
                        <Image src={asta} alt='...' />
                    </FullScreenImage>
                    <br /><br />
                    <FullScreenImage className='poster' imageUrl={jom}>
                        <Image src={jom} alt='...' />
                    </FullScreenImage>
                    <br /><br />
                    <FullScreenImage className='poster' imageUrl={escanor}>
                        <Image src={escanor} alt='...' />
                    </FullScreenImage>
                    <br /><br />
                    <FullScreenImage className='poster' imageUrl={uvo}>
                        <Image src={uvo} alt='...' />
                    </FullScreenImage>
                    <br /><br />
                    <FullScreenImage className='poster' imageUrl={koji}>
                        <Image src={koji} alt='...' />
                    </FullScreenImage>
                </div>
                <div>
                    <FullScreenImage className='poster' imageUrl={cal}>
                        <Image src={cal} alt='...' />
                    </FullScreenImage>
                    <br /><br />
                    <FullScreenImage className='poster' imageUrl={ig88}>
                        <Image src={ig88} alt='...' />
                    </FullScreenImage>
                    <br /><br />
                    <FullScreenImage className='poster' imageUrl={mogg}>
                        <Image src={mogg} alt='...' />
                    </FullScreenImage>
                    <br /><br />
                    <FullScreenImage className='poster' imageUrl={yami}>
                        <Image src={yami} alt='...' />
                    </FullScreenImage>
                    <br /><br />
                    <FullScreenImage className='poster' imageUrl={chagrav}>
                        <Image src={chagrav} alt='...' />
                    </FullScreenImage>
                </div>
                <div>
                    <FullScreenImage className='poster' imageUrl={nomad}>
                        <Image src={nomad} alt='...' />
                    </FullScreenImage>
                    <br /><br />
                    <FullScreenImage className='poster' imageUrl={con}>
                        <Image src={con} alt='...' />
                    </FullScreenImage>
                    <br /><br />
                    <FullScreenImage className='poster' imageUrl={dante}>
                        <Image src={dante} alt='...' />
                    </FullScreenImage>
                    <br /><br />
                    <FullScreenImage className='poster' imageUrl={ewok}>
                        <Image src={ewok} alt='...' />
                    </FullScreenImage>
                    <br /><br />
                    <FullScreenImage className='poster' imageUrl={zoya}>
                        <Image src={zoya} alt='...' />
                    </FullScreenImage>
                </div>
            </div>
        </div>
    )
}

export default Bounties;