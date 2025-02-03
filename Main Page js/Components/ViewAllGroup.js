import React, { useContext, useEffect, useState, useRef } from "react";
import "../../Main Page css/Components/ViewAllGroup.css";
import ViewAllGroupTitle from "./ViewAllGroupTitle";
import ViewAllGroupIcon from "./ViewAllGroupIcon";
import UrlLink from "./UrlLink";
import LoadingScreen from "../../loading,error/LoadingScreen";
import { useParams } from "react-router-dom";
import PhoneContext from "../../others/PhoneContext";

const ViewAllGroup = (props) => {
  const phoneContextValue = useContext(PhoneContext);
  const [apiData, setApiData] = useState(null);
  const [LoadedData, SetLoadedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const ApiData = phoneContextValue.apiData;
  const { value } = useParams();
  const infiniteScrollRef = useRef(null);
  const category = ApiData.categories.find((category) => category.name === value);

  const handleApiDataReceived = (data) => {
    setApiData(data);
  };

  const requestData = {
    phno: '263784763448',
    mlink: phoneContextValue.Mlink,
  };

  const loadMoreItems = () => {
    const newLoadedCount = apiData.categories[0].items.length;
    requestData.loaded = newLoadedCount;
    setIsLoading(true);
    UrlLink({ a: requestData, onApiDataReceived: handleLoadedDataReceived });
  };

  const handleLoadedDataReceived = (data) => {
    SetLoadedData(data);
    setIsLoading(false); 

    if (apiData && data) {
      const mergedCategories = [...apiData.categories[0].items, ...data.categories[0].items];
      const updatedApiData = { ...apiData };
      updatedApiData.categories[0].items = mergedCategories;
      setApiData(updatedApiData);
    }
  };

  const setupIntersectionObserver = () => {
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
  };

  useEffect(() => {
    const a = {
      phno: '263784763448',
      mlink: phoneContextValue.Mlink,
    };

    if (apiData === null) {
      UrlLink({ a, onApiDataReceived: handleApiDataReceived });
    } else {
      return setupIntersectionObserver();
    }
  }, [apiData]);

  if (!apiData) {
    return <LoadingScreen />;
  }

  return (
    <>
      <ViewAllGroupTitle
        heading={category.name}
        value={apiData.categories[0].name}
        src={apiData.categories[0].items[0].thumbnail}
        song={apiData.categories[0].items[0].name}
        artist={apiData.categories[0].items[0].sdesc}
        audio={apiData.categories[0].items[0].flink}
      />
      <div className="empty-35"></div>
      <div className="home-body">
        {apiData.categories[0].items.map((item) => (
          <ViewAllGroupIcon
            api={apiData}
            src={item.thumbnail}
            song={item.name}
            artist={item.sdesc}
            audio={item.flink}
          />
        ))}
        <div ref={infiniteScrollRef}>
          {isLoading ? (
            <LoadingScreen /> // Display loading screen when isLoading is true
          ) : (
            <>
              {LoadedData ? (
                <>
                  {LoadedData.categories[0].items.map((item) => (
                    <ViewAllGroupIcon
                      api={apiData}
                      src={item.thumbnail}
                      song={item.name}
                      artist={item.sdesc}
                      audio={item.flink}
                    />
                  ))}
                </>
              ) : (
                <LoadingScreen />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewAllGroup;
