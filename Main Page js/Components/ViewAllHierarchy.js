import React, { useContext, useEffect, useState, useRef } from 'react';
import '../../Main Page css/Components/ViewAllHierarchy.css';
import ViewAllHierarchyHead from './ViewAllHierarchyHead';
import ViewAllHierarchyIcon from './ViewAllHierarchyIcon';
import LoadingScreen from '../../loading,error/LoadingScreen';
import UrlLink from './UrlLink';
import { useParams } from 'react-router-dom';
import PhoneContext from '../../others/PhoneContext';

const ViewAllHierarchy = () => {
  const phoneContextValue = useContext(PhoneContext);
  const [LoadedData, SetLoadedData] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [LoadedCount, SetLoadedCount] = useState(0);
  const ApiData = phoneContextValue.apiData;
  const { value } = useParams();
  const infiniteScrollRef = useRef(null);
  let category = ApiData.categories.find((category) => category.name === value);
  const a = {
    phno: '263784763448',
    mlink: category.mlink,
  };
  const requestData = {
    phno: '263784763448',
    mlink: category.mlink,
  };
  const handleApiDataReceived = (data) => {
    setApiData(data);
  };
  const loadMoreItems = () => {
    const newLoadedCount = apiData.categories.length;
    requestData.loaded = newLoadedCount;
    UrlLink({ a: requestData, onApiDataReceived: handleLoadedDataReceived });
  };

  const handleLoadedDataReceived = (data) => {
    SetLoadedData(data);
    if (apiData && data) {
      const mergedCategories = [...apiData.categories, ...data.categories];
      const updatedApiData = { ...apiData };
      updatedApiData.categories = mergedCategories;
      setApiData(updatedApiData);
    }
  };
  useEffect(() => {
    console.log('API data:', apiData);
  }, [apiData]);
  useEffect(() => {
    if (apiData === null) {
      UrlLink({ a, onApiDataReceived: handleApiDataReceived });
    } else {
      const options = {
        root: null,
        rootMargin: '0px',
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
  }, [apiData]);

  return (
    <div className="view-all-hierarchy">
      <ViewAllHierarchyHead value="New Releases" />
      <div className="empty-9"></div>
      {!apiData ? (
        <>
          <LoadingScreen />
        </>
      ) : (
        <div className="home-body-column">
          <span className="home-body-hierarchy">
            {apiData.categories.map((item) => (
              <ViewAllHierarchyIcon src={item.thumbnail} name={category.name} artist={item.sdesc} type={item.ctype} mlink={item.mlink} />
            ))}
          </span>
          <span ref={infiniteScrollRef} className="home-body-hierarchy">
          </span>
        </div>
      )}
    </div>
  );
};
export default ViewAllHierarchy;