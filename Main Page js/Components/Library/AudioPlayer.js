import React, { useRef, useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import PhoneContext from '../../../others/PhoneContext';
import Song from '../Song/Song';
import '../../../Main Page css/Components/Library/AudioPlayer.css';

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
const AudioPlayer = () => {
  const phoneContextValue = useContext(PhoneContext);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const audioRef = useRef(null);
  
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const closeProfile = () => {
    setIsProfileOpen(false);
  };

  const togglePlayPause = () => {
    if (phoneContextValue.CurrentSongPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    phoneContextValue.SetCurrentSongPlay(!phoneContextValue.CurrentSongPlay);
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
    } 
    else {
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
  
  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * phoneContextValue.Duration;
    audioRef.current.currentTime = newTime;
    phoneContextValue.SetCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
    phoneContextValue.setVolume(newVolume);
  };

  useEffect(() => {
    const handleTimeUpdate = () => {
      const newTime = audioRef.current.currentTime;
      phoneContextValue.SetCurrentTime(newTime);
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
  
  useEffect(() => {
    const audio = document.querySelector('.audio-player-audio');
    if (!audio) {
      return;
    }
    if (phoneContextValue.CurrentSongPlay) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [phoneContextValue.CurrentSongPlay]);

  return (
    <>
      <audio ref={audioRef} src={phoneContextValue.CurrentSong.audio} autoPlay className='audio-player-audio'></audio>
      {isProfileOpen ? (
        <div className={`profile-wrapper slide-out'}`}>
          <Song close={closeProfile} />
        </div>
      ) : (
        <div className='audio-player'>
          <div className='audio-player1' onClick={toggleProfile}>
            <img className='audio-player-img' src={phoneContextValue.CurrentSong.src} alt="music-circle" />
            <div className='audio-player-name'>
              {phoneContextValue.CurrentSong.song}
            </div>
          </div>
          <div className='custom-audio-player'>
            <span className='audio-bar-text'>{formatTime(phoneContextValue.CurrentTime)}</span>
            <input
              className='audio-bar-player'
              type='range'
              value={(phoneContextValue.CurrentTime / phoneContextValue.Duration) * 100 || 0}
              onChange={handleSeek}
            />
            <span className='audio-bar-text'>{formatTime(phoneContextValue.Duration)}</span>
          </div>
          <div className='audio-player-forward' onClick={handleBackward}>
            <i className='fa fa-step-backward'></i>
          </div>
          <div onClick={togglePlayPause}>
            {phoneContextValue.CurrentSongPlay ? (
              <i className='fa fa-pause-circle audio'></i>
            ) : (
              <i className='fa fa-play-circle audio'></i>
            )}
          </div>
          <div className='audio-player-backward' onClick={handleForward}>
            <i className='fa fa-step-forward'></i>
          </div>
          <div className='audio-volume-class'>
            <div >
              <i className={`fa fa-volume-up volume`}></i>
            </div>
            <input
              className='volume-bar'
              type='range'
              min='0'
              max='1'
              step='0.1'
              value={ phoneContextValue.volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};
export default AudioPlayer;