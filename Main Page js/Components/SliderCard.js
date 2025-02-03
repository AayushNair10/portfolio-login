import React from "react";
import '../../Main Page css//Components/SliderCard.css'
import HeadingCard from "./HeadingCard";
import RectangleCard from "./RectangleCard";
const SliderCard = (props) => {
  return (
    <>
      <div className='slider-margin'>
        <HeadingCard  value={props.value}/>
        <div className="uk-position-relative uk-visible-toggle uk-light slider-class" tabIndex="-1" uk-slider="sets: true">
          <ul className="uk-slider-items uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m slider-item" uk-height-match="row:true">
            <li>
              <RectangleCard value1='Liked Artists' value2='Liked Songs' color1='#265B6A' color2='purple'/>
            </li>
            <li>
              <RectangleCard value1='Downloaded Songs' value2='Downloaded Playlists' color1='orange' color2='green' />
            </li>
            <li>
              <RectangleCard value1='Liked Playlists' value2='Liked Albums'  color1='blue' color2='pink' />
            </li>
            <li>
              <RectangleCard value1='Downloaded Albums' value2='Liked Songs' color1='#AA9839' color2='red' />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default SliderCard;