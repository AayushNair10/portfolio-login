import React, { useState } from 'react';
import AddToPlaylist from './AddToPlaylist';
import '../../../Main Page css/Components/Library/DropdownDots.css';

const DropdownDots = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAddToPlaylistClicked, setIsAddToPlaylistClicked] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleAddToPlaylistClick = (e) => {
    if (!isAddToPlaylistClicked) {
      setIsAddToPlaylistClicked(true);
      setIsOpen(false);
    }
    e.stopPropagation();
  };

  return (
    <div className="custom-dropdown">
      <div className="dropdown-btn" onClick={toggleDropdown}>
        &#8942;
      </div>
      {isOpen && (
        <ul className="dropdown-content">
          <li>Download</li>
          <li onClick={handleAddToPlaylistClick}>Add to Playlist</li>
          <li>Like song</li>
        </ul>
      )}
      {isAddToPlaylistClicked && <AddToPlaylist song={props.song} artist={props.artist} src={props.src} audio={props.audio}/>}
    </div>
  );
};
export default DropdownDots;
