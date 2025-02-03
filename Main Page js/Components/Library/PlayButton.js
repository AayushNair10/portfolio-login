import React from 'react';

const PlayButton = () => {
  const size = 40; 
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg" >
      <circle cx="50" cy="50" r="40" fill="white" />
      <polygon points="30,30 30,70 70,50" fill="black" />
    </svg>
  );
};
export default PlayButton;