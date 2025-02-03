import React, { useContext } from 'react';
import PhoneContext from '../../../others/PhoneContext';
import '../../../Main Page css/Components/Library/ManyCard.css';
import OneCard from './OneCard';
import CardButton from './CardButton';
import { Link } from 'react-router-dom';

const ManyCard = (props) => {
  const { Playlist } = useContext(PhoneContext);
  console.log(Playlist);

  const firstThreeItems = Playlist.slice(1, 4);
  console.log(firstThreeItems)
  return (
    <>
      <div className='manycard-text'>{props.value}: </div>
      {firstThreeItems.map((item) => (
          <OneCard
          audio={item.mlink}
          song={item.name}
          artist={item.sdesc}
          src={item.thumbnail}
          />
      ))}
      <Link to={`/home_page/${props.value}`}>
        <CardButton />
      </Link>
    </>
  );
};
export default ManyCard;