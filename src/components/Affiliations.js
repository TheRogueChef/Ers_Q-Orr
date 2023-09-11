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
            <h1 style={{ fontFamily: 'PersianSword' }}>Affiliates</h1>
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
                        <p>Bossk</p>
                        <p>Bounty Hunter</p>
                        <p className='droidBlurb'>Bossk is very effective with his abilities. Our time together was one of requirement, definitely not choice. I was in Batuu for a standard retrieval, as apparently was Bossk. Unfortunately for Bossk and myself the bounty was expecting us and after several challenging days spent trapped in a collapsed rancor den we were successful in our escape. I ended up collecting the bounty, which seemingly left Bossk unreasonably pissy. I have great respect for Bossk and his scorecard.</p>
                        </div>

                    
                </div>
                <br />
                <div className='droidBox'>
                    <FullScreenImage className='affPic' imageUrl={Leia}>
                        <Image src={Leia} alt='...' />
                    </FullScreenImage>
                    <div>
                        <p>Leia Organa</p>
                        <p>Princess/Rebel Leader</p>
                        <p className='droidBlurb'>Leia and I met at chance meeting in her early years on Alderaan. I was still flying with my father and there was a pick up that went long. During our layover I met Leia and two of her friends out carousing where I was sure a princess should not be. That was the beauty of Leia, she was much more than one would expect. She was fearless and at times fearsome. Our time together was very memorable and I will always miss her.</p>
                    </div>
                </div>
                <br />
                <div className='droidBox'>
                    <FullScreenImage className='affPic' imageUrl={BobaBW}>
                        <Image src={BobaBW} alt='...' />
                    </FullScreenImage>
                    <div>
                        <p>Boba Fett</p>
                        <p>Bounty Hunter</p>
                        <p className='droidBlurb'>Boba Fett and I traveled similar lives. Our interactions were many and always amiable. I respect his skills and have always been aware of his standings in the BH community. His rise to fame while working closely with the Empire, which I know can be quite lucrative, did seem to kind of propel his universally known infamy quickly. I always had a bit of issue with the armor he wore, but lineage and property can be powerful. I'm sure we will cross paths again.</p>
                    </div>
                </div>
                <br />
                <div className='droidBox'>
                    <FullScreenImage className='affPic2' imageUrl={Cad}>
                        <Image src={Cad} alt='...' />
                    </FullScreenImage>
                    <div>
                        <p>Cad Bane</p>
                        <p>Bounty Hunter</p>
                        <p className='droidBlurb'>Rocco was my first droid. He came with The Dark Naught and was excellent with all ship maintenance and, well pretty much anything I needed. He was much faster after a few modifications and his voice modulator was set up to be that of a kima, which worked out well in so many ways. Losing him was tough. </p>
                    </div>
                </div>
                <br />
                <div className='droidBox'>
                    <FullScreenImage className='affPic' imageUrl={Han}>
                        <Image src={Han} alt='...' />
                    </FullScreenImage>
                    <div>
                        <p>Han Solo</p>
                        <p>Smuggler/Rebel adjacent</p>
                        <p className='droidBlurb'>K2 was a very competent partner. His ability to pilot and to think on his feet were excellent. He was kind of a wet rag most of the time and was always feeling that he was very put upon to do just about anything. I have heard that most of these droids were very depressing. He is still out there somewhere, feeling sorry for himself I am sure.</p>
                    </div>
                </div>
                <br />
                <div className='droidBox'>
                    <FullScreenImage className='affPic2' imageUrl={Darth}>
                        <Image src={Darth} alt='...' />
                    </FullScreenImage>
                    <div>
                        <p>Darth Vader</p>
                        <p>Sith Lord</p>
                        <p className='droidBlurb'>Rocco was my first droid. He came with The Dark Naught and was excellent with all ship maintenance and, well pretty much anything I needed. He was much faster after a few modifications and his voice modulator was set up to be that of a kima, which worked out well in so many ways. Losing him was tough. </p>
                    </div>
                </div>
             

            </div>
        </div>
    )
}

export default Affiliations;