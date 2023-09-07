import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const DropdownMenu = ({ isOpen }) => {
  return (
    <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <br />
        <Link to='/acquisitions'>Acquisitions</Link>
        <br /><br />
        <Link to='/deliveries'>Deliveries</Link>
        <br /><br />
        <Link to='/removals'>Removals</Link>
    </div>
  );
};

export default DropdownMenu;