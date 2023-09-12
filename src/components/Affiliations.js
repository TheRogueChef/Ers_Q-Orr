import React from 'react';
import '../components/style.css';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import FullScreenImage from '../components/FullScreenImage';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Darth from '../images/DarthBW.png';
import BobaBW from '../images/BobaBW.png';
import Han from '../images/HanBW.png';
import Bossk from '../images/Bossk.png';
import Cad from '../images/CadBane.png';
import Leia from '../images/LeiaSexy.png';



const Affiliations = () => {
    return (
        <div className='affShell'  >
            <h1 className='droidText' style={{ fontFamily: 'PersianSword' }}>Affiliates</h1>
            <Link className='homeLink2' to='/'>Home</Link>
            <br /><br />
            <div className='droidText' >
                <p>"I prefer to work alone. However, there have been moments..."</p>
            </div>
            <br />
            <div>
                <div className='droidBox'>
                    <div>
                        <FullScreenImage className='affPic2' imageUrl={Bossk}>
                            <Image src={Bossk} alt='...' />
                        </FullScreenImage>
                    </div>
                    <div>
                        <p style={{ fontSize: '4rem'}}>Bossk</p>
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
                        <p style={{ fontSize: '4rem'}}>Leia Organa</p>
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
                        <p style={{ fontSize: '4rem'}}>Boba Fett</p>
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
                        <p style={{ fontSize: '4rem'}}>Cad Bane</p>
                        <p>Bounty Hunter</p>
                        <p className='droidBlurb'>Cad Bane has always been all business. We have been acquaintances for many years and have, at times, been what some may call friends. He does not have much sympathy for any sides and oddly enough, doesnt seem to have any other driving force than that of the hunt. I had always hoped Cad would be able to outlive his own fate, I guess I was wrong.</p>
                    </div>
                </div>
                <br />
                <div className='droidBox'>
                    <FullScreenImage className='affPic' imageUrl={Han}>
                        <Image src={Han} alt='...' />
                    </FullScreenImage>
                    <div>
                        <p style={{ fontSize: '4rem'}}>Han Solo</p>
                        <p>Smuggler/Rebel adjacent</p>
                        <p className='droidBlurb'>Han Solo was someone whom I enjoyed doing business with. During an incursion with a mutual acquaintance (Lando C) we boosted some 'priceless' commodoties, which led to some masterful flying. His ship is a bit of a legend and its damn fun to fly. Over many years we enjoyed many exciting adventures and formed a strong bond. Han was always much more sympathetic to the Rebellion, which caused him many more challenges than one would need. But, Han was kind of a junky for the adventure. I was a bit jealous, but eventually very happy for his union with Leia.</p>
                    </div>
                </div>
                <br />
                <div className='droidBox'>
                    <FullScreenImage className='affPic2' imageUrl={Darth}>
                        <Image src={Darth} alt='...' />
                    </FullScreenImage>
                    <div>
                        <p style={{ fontSize: '4rem'}}>Darth Vader</p>
                        <p>Sith Lord</p>
                        <p className='droidBlurb'>The Empire (or whatever they call themselves now)is always open for business, although their business, especially Lord Vaders is something not to be taken lightly. These contracts need to be looked at through only a certain lens. As I have said, these contracts can be quite lucrative.</p>
                    </div>
                </div>
             
                <ScrollToTopButton />
            </div>
        </div>
    )
}

export default Affiliations;