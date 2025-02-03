import React from "react";
import '../../Main Page css/Components/TopGenreCardSolo.css'
const TopGenreCardSolo = (props) => {
    return (
        <>
            <div>
                <div className="uk-card uk-card-secondary uk-card-hover uk-card-body uk-light card-with-gap" style={{backgroundColor: props.color }}>
                    <h3 className="uk-card-title">{props.value}</h3>
                </div>
            </div>
        </>
    )
}
export default TopGenreCardSolo;
