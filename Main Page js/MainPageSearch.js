import React from "react";
import "../Main Page css/MainPage_search.css"
import TopGenreCard from "./Components/TopGenreCard";
import SearchBar from "./Components/SearchBar";
const MainPageSearch= ()=>{
    return(
        <>
            <div className="home-body">
                <SearchBar />
                <div className='Search'>
                    <TopGenreCard value="Your Top Genre: "/>
                </div>
            </div>
        </>
    )
}
export default MainPageSearch