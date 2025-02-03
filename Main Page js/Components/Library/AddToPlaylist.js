import React, { useContext } from 'react';
import UIkit from 'uikit';
import PhoneContext from '../../../others/PhoneContext';

const AddToPlaylist = (props) => {
  const { Playlist, SetPlaylist } = useContext(PhoneContext);
  const song1 = {
    name: props.song,
    mlink: props.audio,
    thumbnail: props.src,
    sdesc: props.artist,
  };
    const isSongInPlaylist = Playlist.some((item) => item.name === song1.name);
    console.log(isSongInPlaylist)
    if (!isSongInPlaylist) {
      let updatedPlaylist = [...Playlist, song1];
      SetPlaylist(updatedPlaylist);
      UIkit.notification({message: `Added to playlist`});
    }
  return <></>;
};
export default AddToPlaylist;