import React from "react";
import '../../Main Page css/Components/SearchBar.css'
import UIkit from 'uikit'; 
import UIkitIcons from 'uikit/dist/js/uikit-icons'; 

UIkit.use(UIkitIcons);

const SearchBar = (props) => {
    return (
        <>
            <div class='search-bar'>
                <img className="microphone-img" src={require('../../others/microphone.png')} alt="Microphone" />
                <div className="search-text">Find Song</div>
                <form class="uk-search uk-search-default search">
                    <span class="uk-search-icon-flip" uk-search-icon="true"></span>
                    <input class="uk-search-input" type="search" placeholder="Search" aria-label="Search" />
                </form>
            </div>
        </>
    )
}
export default SearchBar;
