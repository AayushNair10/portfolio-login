import React from 'react';
import SongMiddleIcon from './SongMiddleIcon';
import '../../../Main Page css/Components/Song/SongMiddle.css';

const SongMiddle = (props) => {
  return (
    <div className='song-middle'>
      <div className='song-middle-heading'>
        <div className='song-middle-name'>
          {props.song}
        </div>
        <div className='song-middle-artist'>
          {props.artist}
        </div>
      </div>
      <div className='song-middle-image'>
        <img className="song-middle-img" src={props.src} alt="music-circle" />
      </div>
      <div className='song-middle-icon'>
        <SongMiddleIcon song={props.song}
          artist={props.artist}
          src={props.src}
          audio={props.audio}
        />
      </div>
    </div>
  );
};
export default SongMiddle;