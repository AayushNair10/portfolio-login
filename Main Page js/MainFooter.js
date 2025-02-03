
import React, { useState,useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "../Main Page css/MainFooter.css";
import UIkit from 'uikit'; 
import UIkitIcons from 'uikit/dist/js/uikit-icons'; 
UIkit.use(UIkitIcons);

const MainFooter = () => {
  useEffect(() => {
      UIkit.update();
  }, []);
  const [activeLink, setActiveLink] = useState("home");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div className="navbar">
        <Link
          uk-icon="icon: home"
          to="/home_page"
          className={activeLink === "home" ? "footer active" : "footer"}
          onClick={() => handleLinkClick("home")}
        >
          Home
        </Link>
        <Link
          uk-icon="icon: search"
          to="/home_page/search"
          className={activeLink === "search" ? "footer active" : "footer"}
          onClick={() => handleLinkClick("search")}
        >
          Search
        </Link>
        <Link
          uk-icon="icon: album"
          to="/home_page/library"
          className={activeLink === "library" ? "footer active" : "footer"}
          onClick={() => handleLinkClick("library")}
        >
          Library
        </Link>
        <Link
          uk-icon="icon: receiver"
          to="/home_page/callertune"
          className={activeLink === "callertune" ? "footer active" : "footer"}
          onClick={() => handleLinkClick("callertune")}
        >
          Callertune
        </Link>
      </div>
    < Outlet />
    </>
  );
};
export default MainFooter;