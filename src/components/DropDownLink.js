import React, { useState } from 'react';
import DropdownMenu from './DropDownMenu';

const DropdownLink = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a href="/services">Services</a>
      <DropdownMenu isOpen={isOpen} />
    </div>
  );
};

export default DropdownLink;