import React, { useContext } from 'react';
import PhoneContext from '../../others/PhoneContext';
import ViewAllGroupIcon from './ViewAllGroupIcon';
import { Link } from 'react-router-dom';

const ViewPlaylist = (props) => {
  const { Playlist } = useContext(PhoneContext);
  const phoneContextValue = useContext(PhoneContext);
  phoneContextValue.SetSongQueue(Playlist);
  return (
    <>
      <Link to="/home_page/library" className='back-icon-hierarchy'>&#8249;</Link>
      <div className='manycard-text'>PLAYLIST: </div>
      {Playlist.map((item) => (
        item.thumbnail && item.name && item.sdesc && item.mlink ? (
          <ViewAllGroupIcon
          value={props.value}
          audio={item.mlink}
          song={item.name}
          artist={item.sdesc}
          src={item.thumbnail}
          playlist={Playlist}
          />
        ) : null
      ))}
    </>
  );
};
export default ViewPlaylist;