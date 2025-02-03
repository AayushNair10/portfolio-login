import React from "react";
import '../../Main Page css/Components/TopGenreCard.css'
import TopGenreCardSolo from "./TopGenreCardSolo";
import HeadingCard from "./HeadingCard";


const TopGenreCard = (props) => {
    return (
        <>
            <HeadingCard value={props.value} />
            <div className="uk-grid uk-child-width-1-2@s uk-grid-small" uk-grid>
                <TopGenreCardSolo value='Gospel' color='red'/>
                <TopGenreCardSolo value='Afro Fusion' color='orange'/>
                <TopGenreCardSolo value='Urban Grooves' color='#87CEFA'/>
                <TopGenreCardSolo value='DenDara' color='green'/>
                <TopGenreCardSolo value='Sunhara' color='purple'/>
                <TopGenreCardSolo value='Afro Jazz' color='blue'/>
            </div>
        </>
    )
}
export default TopGenreCard;
