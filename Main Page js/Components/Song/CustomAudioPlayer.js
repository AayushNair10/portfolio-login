import React, { useRef, useEffect, useContext } from 'react';
import PhoneContext from '../../../others/PhoneContext';
import '../../../Main Page css/Components/Library/CustomAudioPlayer.css';

const CustomAudioPlayer = ({ audioSource }) => {
  const phoneContextValue = useContext(PhoneContext);
  const audioRef = useRef(null);
  const togglePlayPause = () => {
    if (phoneContextValue.CurrentSongPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    phoneContextValue.SetCurrentSongPlay(!phoneContextValue.CurrentSongPlay);
  };

  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * phoneContextValue.Duration;
    audioRef.current.currentTime = newTime;
    phoneContextValue.SetCurrentTime(newTime);
  };

  const handleBackward = () => {
    const currentIndex = phoneContextValue.SongQueue.findIndex(
         (song) => song.name === phoneContextValue.CurrentSong.song
       );
       if (currentIndex > 0) {
         const previousSong = phoneContextValue.SongQueue[currentIndex - 1];
         phoneContextValue.SetCurrentSong({
           song: previousSong.name,
           audio: previousSong.flink,
           src: previousSong.thumbnail,
           artist: previousSong.sdesc,
         });
         phoneContextValue.SetCurrentSongPlay(true);
       }
 };

  const handleForward = () => {
    if (phoneContextValue.isShuffleOn) {
      const randomIndex = Math.floor(Math.random() * phoneContextValue.SongQueue.length);
      const randomSong = phoneContextValue.SongQueue[randomIndex];

      phoneContextValue.SetCurrentSong({
        song: randomSong.name,
        audio: randomSong.flink,
        src: randomSong.thumbnail,
        artist: randomSong.sdesc,
      });
    } else {
      const currentIndex = phoneContextValue.SongQueue.findIndex(
        (song) => song.name === phoneContextValue.CurrentSong.song
      );
      let nextSong='';
      if (currentIndex < phoneContextValue.SongQueue.length - 1) {
        nextSong = phoneContextValue.SongQueue[currentIndex + 1];
      }
      else{
        nextSong = phoneContextValue.SongQueue[0];
      }
      phoneContextValue.SetCurrentSong({
        song: nextSong.name,
        audio: nextSong.flink,
        src: nextSong.thumbnail,
        artist: nextSong.sdesc,
      });
      phoneContextValue.SetCurrentSongPlay(true);
    }
    phoneContextValue.SetCurrentSongPlay(true);
  };

  const toggleShuffle = () => {
    phoneContextValue.setIsShuffleOn(!phoneContextValue.isShuffleOn);
  };
  useEffect(() => {
    const handleTimeUpdate = () => {
      const newTime = audioRef.current.currentTime;
      phoneContextValue.SetCurrentTime(newTime);
      phoneContextValue.SetDuration(audioRef.current.duration);
    };
    const currentAudioRef = audioRef.current;
    currentAudioRef.addEventListener('timeupdate', handleTimeUpdate);
    currentAudioRef.addEventListener('loadedmetadata', () => {
      phoneContextValue.SetDuration(audioRef.current.duration);
    });

    return () => {
      currentAudioRef.removeEventListener('timeupdate', handleTimeUpdate);
      currentAudioRef.removeEventListener('loadedmetadata', () => {});
    };
  }, [phoneContextValue]);

  return (
    <div className='custom-audio-player'>
      <audio ref={audioRef} src={audioSource}></audio>
      <div className='audio-controls'>
        <div className='song-backward-step' onClick={handleBackward}>
          <i className='fa fa-step-backward'></i>
        </div>
        <div onClick={togglePlayPause}>
          {phoneContextValue.CurrentSongPlay ? (
            <i className='fa fa-pause-circle pause'></i>
          ) : (
            <i className='fa fa-play-circle play'></i>
          )}
        </div>
        <div className='custom-audio-play'>
          <span className='audio-bar-text'>{formatTime(phoneContextValue.CurrentTime)}</span>
          <input
            className='audio-bar'
            type='range'
            value={(phoneContextValue.CurrentTime / phoneContextValue.Duration) * 100 || 0}
            onChange={handleSeek}
          />
          <span className='audio-bar-text'>{formatTime(phoneContextValue.Duration)}</span>
        </div>
        <div className='song-forward-step' onClick={handleForward}>
          <i className='fa fa-step-forward'></i>
        </div>
        <div className='song-shuffle' onClick={toggleShuffle}>
          <i className={`fa ${phoneContextValue.isShuffleOn ? 'fa-random shuffle-on' : 'fa-random'}`}></i>
        </div>
      </div>
    </div>
  );
};

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
export default CustomAudioPlayer;