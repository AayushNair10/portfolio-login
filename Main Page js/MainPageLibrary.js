import React from "react";
import "../Main Page css/MainPage_library.css"
import ManyCard from "./Components/Library/ManyCard";

const MainPageLibrary= ()=>{
    return(
        <>
            <div className="home-body">
                <div className="library">
                    <ManyCard value='Playlist'/>
                </div>
            </div>
        </>
    )
}
export default MainPageLibrary