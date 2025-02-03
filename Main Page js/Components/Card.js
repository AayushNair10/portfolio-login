import React, { useContext, useState } from "react";
import '../../Main Page css/Components/Card.css';
import PlayButton from "./Library/PlayButton";
import PhoneContext from "../../others/PhoneContext";
import { useNavigate } from "react-router-dom";
const Card = (props) => {
  const phoneContextValue = useContext(PhoneContext);
  const [CanNavigate] = useState(props.view === 'group'); 
  const navigate = useNavigate();
  
  const ChangeSong = () => {
    if (CanNavigate) {
      const value = props.value;
      phoneContextValue.SetMlink(props.Cmlink);
      navigate(`/home_page/viewallgroup/${value}`);
    } else {
      phoneContextValue.SetSongQueue(props.category);
      phoneContextValue.SetMlink(props.Gmlink);
      phoneContextValue.SetCurrentSong({
        song: props.name,
        audio: props.audio,
        src: props.src,
        artist: props.artist,
      });
      phoneContextValue.SetCurrentSongPlay(true);
    }
  };

  return (
    <div className='slider-image' onClick={ChangeSong}>
      <img src={props.src} alt={props.alt} />
      <div className="play-button-container">
        <PlayButton />
      </div>
    </div>
  );
};
export default Card;