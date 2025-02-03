import React from "react";
import '../../../Main Page css/Components/Library/OneCard.css'

const OneCard = (props) =>{
    return(
        <div class='one-card-container'>
            <div class='one-card'>
                <img className="album-img" src={props.src} alt="album" />
                <div class='onecard-text'>{props.song}<br />
                    <span className='card-artist'>by {props.artist}</span>
                </div>
            </div>
        </div>
    )
}
export default OneCard;