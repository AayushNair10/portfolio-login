import React,{ useContext }  from 'react';
import '../../Main Page css/Components/ViewAllGroupTitle.css'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import DropdownDotsTitle from './Library/DropdownDotsTitle';
import PhoneContext from '../../others/PhoneContext';
import { Link } from 'react-router-dom';
UIkit.use(Icons);

const ViewAllGroupTitle=(props)=> {
  const phoneContextValue = useContext(PhoneContext);
  const PlayAll=()=>{
      if(props.apiData){
        phoneContextValue.SetSongQueue(props.apiData.categories[0].items);
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
  }
  return (
    <div className='view-all-group-title'>
      <div className='view-all-group-title-head'>
        <div className='view-all-group-title-head-icon'>
          <Link to="/home_page" className="previous-round">&#8249;</Link>
          <div className='view-all-group-title-head-iconn'>
            <span class='search-iconn' uk-icon="icon: search"></span>
            <DropdownDotsTitle />
          </div>
        </div>
        <div className='view-all-group-title-headd'>
          {props.heading}
        </div>
      </div>
      <div className='view-all-group-title-buttons'>
        <button className='view-all-group-title-button uk-button'>
          <span uk-icon="icon: social"></span> Share
        </button>
        <button className='view-all-group-title-button uk-button' onClick={PlayAll}>
            <span uk-icon="icon: play-circle"></span> Play All
        </button>
      </div>
      <div class='view-all-group-text'>
        Top Songs
      </div>
    </div>
  );
}
export default ViewAllGroupTitle;