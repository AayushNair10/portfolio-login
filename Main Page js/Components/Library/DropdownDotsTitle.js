import React, { useState } from 'react';
import '../../../Main Page css/Components/Library/DropdownDotsTitle.css';

const DropdownDotsTitle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="custom-dropdown-title">
      <div className="dropdown-btn-title" onClick={toggleDropdown}>
        &#8942;
      </div>
      {isOpen && (
        <ul className="dropdown-content-title">
          <li>Download</li>
          <li>Play All</li>
          <li>Add to favourite</li>
        </ul>
      )}
    </div>
  );
};
export default DropdownDotsTitle;