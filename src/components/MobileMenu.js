import React, { useState } from 'react';
import { Link } from 'react-scroll';


const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="mobile-menu">
            <br />
            <div className="menu-toggle" onClick={toggleMenu}>
                Menu  
                
                <div className={`menu-icon ${menuOpen ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <br />
            {menuOpen && (
                <div className="menu-items">
                    <Link to="about" smooth={true} duration={500}>
                        About Me
                    </Link>
                    <br /><br />
                    <Link to="pricing" smooth={true} duration={500}>
                        Services
                    </Link>
                    <br /><br />
                    <Link to="specialties" smooth={true} duration={500}>
                        Specialties
                    </Link>
                    <br /><br />
                    <Link to="promotions" smooth={true} duration={500}>
                        Promotions
                    </Link>
                    <br /><br />
                    <Link to="giftCards" smooth={true} duration={500}>
                        Gift Cards
                    </Link>
                    <br /><br />
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;