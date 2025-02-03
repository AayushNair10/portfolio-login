import React,{ useContext }  from 'react';
import PhoneContext from "../../others/PhoneContext";
import '../../Main Page css/Components/ViewAllGroupIcon.css';
import DropdownDots from './Library/DropdownDots';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

const ViewAllGroupIcon = (props) => {
  const phoneContextValue = useContext(PhoneContext);
  const ChangeSong = () => {
    if(props.api){
      phoneContextValue.SetSongQueue(props.api.categories[0].items);
      console.log(phoneContextValue.SongQueue)
    }
    if(props.playlist){
      phoneContextValue.SetSongQueue(props.playlist);
      console.log('playlist:');
      console.log(phoneContextValue.SongQueue);
    }
    phoneContextValue.SetCurrentSongPlay(true);
    phoneContextValue.SetCurrentSong({
      song: props.song,
      audio: props.audio,
      src: props.src,
      artist: props.artist,
    });
  };

  return (
    <div className='view-all-group-container'>
      <div className='view-all-group-card'>
        <div className='view-all-group-div'>
          <div className='view-all-img' onClick={ChangeSong}>
            <img src={props.src} alt='music-cover' />
          </div>
          <div className='view-all-text'>{props.song}
            <br />
            <span className='view-all-artist'>by {props.artist}</span>
          </div>
        </div>
        <div className='view-all-group-div'>
          <span className='download-icon' uk-icon='icon: download'></span>
          <DropdownDots
            src={props.src}
            song={props.song}
            artist={props.artist}
            audio={props.audio} 
            mlink={phoneContextValue.Mlink}
          />
        </div>
      </div>
    </div>
  );
};
export default ViewAllGroupIcon;