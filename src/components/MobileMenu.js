import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


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
                    <Link className='menu-links' to="/aboutme" smooth='true' duration={500}>
                        Lineage
                    </Link>
                    <br /><br />
                    <Link className='menu-links' to="/darknaught" smooth='true' duration={500}>
                        The Dark Naught
                    </Link>
                    <br /><br />
                    <Link className='menu-links' to="/weapons" smooth='true' duration={500}>
                        Weapons
                    </Link>
                    <br /><br />
                    <Link className='menu-links' to="/droids" smooth='true' duration={500}>
                        Droids
                    </Link>
                    <br /><br />
                    <Link className='menu-links' to="/affiliations" smooth='true' duration={500}>
                        Affiliations
                    </Link>
                    <br /><br />
                    <Link className='menu-links' to="/bounties" smooth='true' duration={500}>
                        Bounties
                    </Link>
                    <br /><br />
                    <Link className='menu-links' to="/services" smooth='true' duration={500}>
                        Services
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;