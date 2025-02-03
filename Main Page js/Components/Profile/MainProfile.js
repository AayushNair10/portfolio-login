import React, { useState, useEffect } from 'react';
import '../../../Main Page css/Components/Profile/MainProfile.css';
import MainProfileHead from './MainProfileHead';
import MainProfileGeneral from './MainProfileGeneral';
import MainProfileMusic from './MainProfileMusic';
import MainProfileSettings from './MainProfileSettings';
import LoadingScreen from '../../../loading,error/LoadingScreen';
import UrlLink from '../UrlLink';
import { Link } from 'react-router-dom';

const MainProfile = (props) => {
  const [apiData, setApiData] = useState(null);
  const a = {
    phno: '263784763448',
    '':'&lang=en&prgid=1',
  };

  const handleApiDataReceived = (data) => {
    setApiData(data);
  };

  useEffect(() => {
    console.log('API data:', apiData);
  }, [apiData]);
  
  return (
    <>
      <Link to="/home_page" className='back-icon-hierarchy' onClick={props.close}>&#8249;</Link>
      <div>
        <MainProfileHead phno={a.phno} name={props.phone} />
      </div>
      {
        apiData === null ? (
          <>
            <UrlLink a={a} onApiDataReceived={handleApiDataReceived} />
            <LoadingScreen />
          </>
        ) : (
          <>
            <div className='main-profile'>
              <MainProfileMusic phno={a.phno} data={apiData} />
            </div>
            <div className='main-profile'>
              <MainProfileSettings data={apiData} />
            </div>
            <div className='main-profile'>
              <MainProfileGeneral phno={a.phno} data={apiData} />
            </div>
          </>
        ) 
      }
    </>
  );
};
export default MainProfile;