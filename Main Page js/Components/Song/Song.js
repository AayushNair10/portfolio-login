import React, { useContext } from 'react';
import '../../../Main Page css/Components/Song/Song.css';
import CustomAudioPlayer from './CustomAudioPlayer';
import SongMiddle from './SongMiddle';
import SongHeader from './SongHeader';
import LoadingScreen from '../../../loading,error/LoadingScreen';
import PhoneContext from '../../../others/PhoneContext';

const Song = (props) => {
  const phoneContextValue = useContext(PhoneContext);

  return (
    <>
      {!phoneContextValue ? (
        <LoadingScreen />
      ) : (
        <div className='song'>
          <div className='song-head'>
            <SongHeader 
            close={props.close}
            song={phoneContextValue.CurrentSong.song}
              artist={phoneContextValue.CurrentSong.artist}
              src={phoneContextValue.CurrentSong.src}
              audio={phoneContextValue.CurrentSong.audio}
              mlink={phoneContextValue.CurrentSong.mlink} />
          </div>
          <div className='song-mid'>
            <SongMiddle
              song={phoneContextValue.CurrentSong.song}
              artist={phoneContextValue.CurrentSong.artist}
              src={phoneContextValue.CurrentSong.src}
              audio={phoneContextValue.CurrentSong.audio}
            />
          </div>
          <div className='song-foot'>
            <CustomAudioPlayer audioSource={phoneContextValue.CurrentSong.audio} />
          </div>
        </div>
      )}
    </>
  );
};
export default Song;