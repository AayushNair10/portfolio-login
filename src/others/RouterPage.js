import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../login and otp js/Login';
import Email from '../login and otp js/Email';
import Otp from '../login and otp js/Otp';
import NotFound from '../loading,error/NotFound';
import PhoneContext from './PhoneContext';
import MainPage from '../MainPage/template/MainPage';


const RouterPage = () => {
  const [phone, setPhone] = useState('');
  const [GetOtp, setGetOtp] = useState('');
  const [apiData, SetapiData] = useState('');
  const [CurrentSong, SetCurrentSong] = useState('');
  const [CurrentSongPlay, SetCurrentSongPlay] = useState(true);
  const [SongQueue, SetSongQueue] = useState(false);
  const [isShuffleOn, setIsShuffleOn] = useState(false);
  const [CurrentTime, SetCurrentTime] = useState(null);
  const [Duration, SetDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [Mlink, SetMlink] = useState(false);
  const [Playlist, SetPlaylist] = useState([
    {
      name: '',
      mlink: '',
      thumbnail: '',
      sdesc: '',
    },
  ]);

  const phoneContextValue = {
    phone,
    setPhone,
    GetOtp,
    setGetOtp,
    apiData,
    SetapiData,
    CurrentSong,
    SetCurrentSong,
    CurrentSongPlay,
    SetCurrentSongPlay,
    Playlist,
    SetPlaylist,
    SongQueue, 
    SetSongQueue,
    CurrentTime,
    SetCurrentTime,
    Duration,
    SetDuration,
    volume, 
    setVolume,
    Mlink, 
    SetMlink,
    isShuffleOn, 
    setIsShuffleOn,
  };

  return (
    <PhoneContext.Provider value={phoneContextValue}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/email" element={<Email />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/home_page" element={<MainPage />} />
          {/* <Route path="/home_page" element={CurrentSong.song && <AudioPlayer />}>
            <Route path="/home_page" element={<MainFooter />}>
              
              <Route path="library" element={<MainPageLibrary />} />
              <Route path="search" element={<MainPageSearch />} />
              <Route path="callertune" element={<MainPageCallertune />} />
            </Route>
            <Route path="viewallhierarchy/:value" element={<ViewAllHierarchy />} />
            <Route path="viewallgroup/:value" element={<ViewAllGroup />} />
            <Route path="profile" element={<MainProfile />} />
            <Route path="url" element={<UrlLink />} />
            <Route path="Playlist" element={<ViewPlaylist />} />
            <Route path="queue" element={<Queue />} />
          </Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PhoneContext.Provider>
  );
};
export default RouterPage;