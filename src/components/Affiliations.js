import React from 'react';
import '../components/style.css';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import FullScreenImage from '../components/FullScreenImage';
import Darth from '../images/DarthBW.png';
import BobaBW from '../images/BobaBW.png';
import Han from '../images/HanBW.png';
import Bossk from '../images/Bossk.png';
import Cad from '../images/CadBane.png';
import Leia from '../images/LeiaSexy.png';



const Affiliations = () => {
    return (
        <div className='affShell'  >
            <h1 style={{ fontFamily: 'PersianSword' }}>Affiliations</h1>
            <Link className='homeLink2' to='/'>Home</Link>
            <br /><br /><br />
            <div className='droidText' >
                <p>"I prefer to work alone. However, these are some of the exceptions."</p>
            </div>
            <br />
            <div>
                <div className='droidBox'>
                    <div>
                        <FullScreenImage className='affPic1' imageUrl={Bossk}>
                            <Image src={Bossk} alt='...' />
                        </FullScreenImage>
                    </div>
                    <div>
                        <p>T.A.D.</p>
                        <p>( TU Aqua Droid )</p>
                        <p className='droidBlurb'>TAD is one of my favorites. These battle droids are easy to program and worthy in battle. They dont have a much of a personality and can be a bit repetitive. But, he is still with me and although he has no sense of humor, he is someone I enjoy having around even if he is terrible with ship maintenance.</p>
                        </div>

                    
                </div>
                <br />
                <div className='droidBox'>
                    <FullScreenImage className='affPic' imageUrl={Leia}>
                        <Image src={Leia} alt='...' />
                    </FullScreenImage>
                    <div>
                        <p>Rocco</p>
                        <p>( Octuptarra combat tri~droid )</p>
                        <p className='droidBlurb'>Rocco was my first droid. He came with The Dark Naught and was excellent with all ship maintenance and, well pretty much anything I needed. He was much faster after a few modifications and his voice modulator was set up to be that of a kima, which worked out well in so many ways. Losing him was tough. </p>
                    </div>
                </div>
                <br />
                <div className='droidBox'>
                    <FullScreenImage className='affPic' imageUrl={BobaBW}>
                        <Image src={BobaBW} alt='...' />
                    </FullScreenImage>
                    <div>
                        <p>R4</p>
                        <p>( R4~I9 Agromech droid )</p>
                        <p className='droidBlurb'>R4 was a gift from a farmer on Tatooine. He was very good at communicating with other computers and being that he was quite manipulative he was able to convince a lot of systems to do whatever we needed. As far as his personality went, he was an asshole. He was always very rude and always had to have the last word. I have always appreciated his ability but I finally had to shut him down due to him harassing just about anyone who boarded.</p>
                    </div>
                </div>
                <br />
                <div className='droidBox'>
                    <FullScreenImage className='affPic2' imageUrl={Cad}>
                        <Image src={Cad} alt='...' />
                    </FullScreenImage>
                    <div>
                        <p>Rocco</p>
                        <p>( Octuptarra combat tri~droid )</p>
                        <p className='droidBlurb'>Rocco was my first droid. He came with The Dark Naught and was excellent with all ship maintenance and, well pretty much anything I needed. He was much faster after a few modifications and his voice modulator was set up to be that of a kima, which worked out well in so many ways. Losing him was tough. </p>
                    </div>
                </div>
                <br />
                <div className='droidBox'>
                    <FullScreenImage className='affPic' imageUrl={Han}>
                        <Image src={Han} alt='...' />
                    </FullScreenImage>
                    <div>
                        <p>K2</p>
                        <p>( KX series K~2SO Enforcer )</p>
                        <p className='droidBlurb'>K2 was a very competent partner. His ability to pilot and to think on his feet were excellent. He was kind of a wet rag most of the time and was always feeling that he was very put upon to do just about anything. I have heard that most of these droids were very depressing. He is still out there somewhere, feeling sorry for himself I am sure.</p>
                    </div>
                </div>
                <br />
                <div className='droidBox'>
                    <FullScreenImage className='affPic2' imageUrl={Darth}>
                        <Image src={Darth} alt='...' />
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

export default Affiliations;