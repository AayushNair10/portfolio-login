import React, { useState } from 'react';
import '../../../Main Page css/Components/Song/SongMiddleIcon.css';
import AddToPlaylist from '../Library/AddToPlaylist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartEmpty } from '@fortawesome/free-regular-svg-icons';
import {
  faShareAlt,
  faDownload,
  faListUl,
  faHeart as heartFilled,
} from '@fortawesome/free-solid-svg-icons';

const SongMiddleIcon = (props) => {
  const [isAddToPlaylistClicked, setIsAddToPlaylistClicked] = useState(false);

  const handleAddToPlaylistClick = () => {
    setIsAddToPlaylistClicked(true); 
  };
  const [isHeartFilled, SetisHeartFilled] = useState(false);
  const ToggleHeart = () => {
    SetisHeartFilled(!isHeartFilled);
  };
  const iconSizeClass = 'custom-icon-size';

  return (
    <>
      <div className={`share-nodes ${iconSizeClass}`}>
        <FontAwesomeIcon icon={faShareAlt} />
      </div>
      <div className={`download ${iconSizeClass}`}>
        <FontAwesomeIcon icon={faDownload} />
      </div>
      <div className={`list-ul ${iconSizeClass}`}>
        <FontAwesomeIcon icon={faListUl} onClick={handleAddToPlaylistClick}/>
        {isAddToPlaylistClicked && <AddToPlaylist value={props.value} song={props.song} artist={props.artist} src={props.src}  audio={props.audio}/>}
      </div>
      <div className={`heart ${iconSizeClass}`} onClick={ToggleHeart}>
        <FontAwesomeIcon icon={isHeartFilled ? heartFilled : heartEmpty} />
      </div>
    </>
  );
};
export default SongMiddleIcon;