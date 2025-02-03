import React, { useState, useEffect, useContext, useRef } from "react";
import "../Main Page css/MainPage_home.css";
import Slider from "./Components/Slider";
import DoubleSlider from "./Components/DoubleSlider";
import SingleSliderCircle from "./Components/Library/SingleSliderCircle";
import UIkit from 'uikit';
import 'uikit/dist/css/uikit.min.css';
import Icons from 'uikit/dist/js/uikit-icons';
import PhoneContext from "../others/PhoneContext";
import SliderCard from "./Components/SliderCard";
import MainProfile from './Components/Profile/MainProfile';
import UrlLink from "./Components/UrlLink";
import LoadingScreen from "../loading,error/LoadingScreen";

UIkit.use(Icons);

const MainPageHome = () => {
  const phoneContextValue = useContext(PhoneContext);
  const [apiData, setApiData] = useState(null);
  const [LoadedData, SetLoadedData] = useState(null);
  const phone = phoneContextValue.phone;
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [LoadedCount, SetLoadedCount] = useState(0);
  const [updatedApiData, SetupdatedApiData] = useState('');
  const a = {
    phno: '263784763448',
    '': '&lang=en&prgid=1&act=tabs',
  };

  const requestData = {
    phno: '263784763448',
    '': '&lang=en&prgid=1&act=tabs',
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const closeProfile = () => {
    setIsProfileOpen(false);
  };

  const handleApiDataReceived = (data) => {
    setApiData(data);
  };

  let loadMoreItems = () => {
    const newLoadedCount = LoadedCount + apiData.categories.length;
    SetLoadedCount(newLoadedCount);

    requestData.loaded = newLoadedCount;

    UrlLink({ a: requestData, onApiDataReceived: handleLoadedDataReceived });
  };

  const handleLoadedDataReceived = (data) => {
    SetLoadedData(data);
    if (apiData && data) {
      const mergedCategories = [...apiData.categories, ...data.categories];
      SetupdatedApiData({ ...apiData, categories: mergedCategories });
    }
  };
  const infiniteScrollRef = useRef(null);
 
  useEffect(() => {
    if (apiData === null) {
      UrlLink({ a, onApiDataReceived: handleApiDataReceived });
    } else {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadMoreItems();
          }
        });
      }, options);
  
      const currentRef = infiniteScrollRef.current;   
      if (currentRef) {
        observer.observe(currentRef);
      }
  
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }
  }, [ apiData]);

  useEffect(() => {
    console.log('API data:', apiData);
  }, [apiData]);

  return (
    <>
      <div className="home-body">
        <div className="header-page">
          <div className="main-title">Logo</div>
          <div className="main-icons">
            <span className="uk-icon-link uk-margin-small-right" uk-icon="search"></span>
            <span className="uk-icon-link" uk-icon="user" onClick={toggleProfile}></span>
          </div>
        </div>
        
        {apiData === null ? (
          <>
            <LoadingScreen />
          </>
        ) : (
          <>
            {phoneContextValue.SetapiData(apiData)}
            {apiData.categories.map((category) => (
              <Slider
                key={category.groupid}
                value={category.name}
                items={category.items}
                view={category.ctype}
                mlink={category.mlink}
                size={category.items[0].itempercent}
                category={category.items}
              />
            ))}
            <DoubleSlider value="Top Genres: " />
            <SingleSliderCircle value="Artists for you: " />
            <SliderCard value="Top Genres: " />
            <div ref={infiniteScrollRef}>
              {LoadedData === null ? (
                <LoadingScreen />
              ) : (
                <>
                  {LoadedData.categories.map((category) => (
                    <Slider
                      key={category.groupid}
                      value={category.name}
                      items= {category.items}
                      view={category.ctype}
                      mlink={category.mlink}
                      category={category.items}
                    />
                  ))}
                  {phoneContextValue.SetapiData(updatedApiData)}
                </>
              )}
            </div>
          </>
        )}
      </div>
      <div className={`profile-wrapper ${isProfileOpen ? 'slide-in' : 'slide-out'}`}>
        <MainProfile close={closeProfile} phone={phone} />
      </div>
    </>
  );
};
export default MainPageHome;