import React from 'react';
import '../components/style.css';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import FullScreenImage from '../components/FullScreenImage';
import TAD from '../images/aqua_droid.jpg';
import R4 from '../images/r4_i9.jpg';
import KX from '../images/kx_series.jpg';
import Oct from '../images/octuptarra.jpg';



const Droids = () => {
    return (
        <div className='droidShell'  >
            <h1 style={{ fontFamily: 'PersianSword'}}>Droids</h1>
             <Link className='homeLink2' to='/'>Home</Link>
             <br /><br /><br />
            <div className='droidText' >
                <p>"I prefer the company of droids over living beings. These are droids that I have worked with."</p>
            </div>
            <br />
            <div>
                <div className='droidBox'>
                <FullScreenImage className='shipPics2' imageUrl={TAD}>
                    <Image src={TAD} alt='...' />
                    </FullScreenImage>
                    <div>
                        <p>T.A.D.</p>
                        <p>( TU Aqua Droid )</p>
                        <p className='droidBlurb'>TAD is one of my favorites. These battle droids are easy to program and worthy in battle. They dont have a much of a personality and can be a bit repetitive. But, he is still with me and although he has no sense of humor, he is someone I enjoy having around even if he is terrible with ship maintenance.</p>
                    </div>
                </div>
                <br />
                <div className='droidBox'>
                <FullScreenImage className='shipPics2' imageUrl={R4}>
                    <Image src={R4} alt='...' />
                    </FullScreenImage>
                    <div>
                        <p>R4</p>
                        <p>( R4~I9 Agromech droid )</p>
                        <p className='droidBlurb'>R4 was a gift from a farmer on Tatooine. He was very good at communicating with other computers and being that he was quite manipulative he was able to convince a lot of systems to do whatever we needed. As far as his personality went, he was an asshole. He was always very rude and always had to have the last word. I have always appreciated his ability but I finally had to shut him down due to him harassing anyone who boarded.</p>
                    </div>
                </div>
                <br />
                <div className='droidBox'>
                <FullScreenImage className='shipPics2' imageUrl={KX}>
                    <Image src={KX} alt='...' />
                    </FullScreenImage>
                    <div>
                        <p>K2</p>
                        <p>( KX series K~2SO Enforcer )</p>
                        <p className='droidBlurb'>K2 was a very competent partner. His ability to pilot and to think on his feet were excellent. He was kind of a wet rag most of the time and was always feeling that he was very put upon to do just about anything. I have heard that most of these droids were very depressing. He is still out there somewhere, feeling sorry for himself I am sure.</p>
                    </div>
                </div>
                <br />
                <div className='droidBox'>
                <FullScreenImage className='shipPics2' imageUrl={Oct}>
                    <Image src={Oct} alt='...' />
                    </FullScreenImage>
                    <div>
                        <p>Rocco</p>
                        <p>( Octuptarra combat tri~droid )</p>
                        <p className='droidBlurb'>Rocco was my first droid. He came with The Dark Naught and was excellent with all ship maintenance and, well pretty much anything I needed. He was much faster after a few modifications and his voice modulator was set up to be that of a kima, which worked out well in so many ways. Losing him was tough. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Droids;