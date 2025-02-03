import React, { useState } from "react";
import { Link } from 'react-router-dom';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Queue from "../Library/Queue";
import '../../../Main Page css/Components/Song/SongHeader.css'

UIkit.use(Icons);
const SongHeader=(props)=> {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  const closeProfile = () => {
    setIsProfileOpen(false);
  };
  return (
    <div class='song-header'>
      <Link to="/home_page" className='back-icon-hierarchy' onClick={props.close}>&#8249;</Link>
      <div className='song-now-playing'>Now Playing</div>
      <div>
        <span className='song-list-icon' uk-icon="icon: list" onClick={toggleProfile}></span>
      </div>
      <div className={`queue-wrapper ${isProfileOpen ? 'slide-in' : 'slide-out'}`}>
        <Queue close={closeProfile} song={props.song}
              artist={props.artist}
              src={props.src}
              audio={props.audio} 
              mlink={props.mlink}/>
      </div>
    </div>
  )
}
export default SongHeader;