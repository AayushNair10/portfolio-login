import React, { useEffect } from 'react';
import 'uikit/dist/css/uikit.min.css';
import SingleSliderImage from './SingleSliderImage';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import HeadingCard from '../HeadingCard';
UIkit.use(Icons);

const SingleSliderCircle = (props) => {
  useEffect(() => {
    UIkit.update();
  }, []);

  return (
    <div className='slider-margin'>
      <HeadingCard value={props.value} />
      <br />
      <div className="uk-position-relative uk-visible-toggle uk-light slider-class" tabIndex="-1" uk-slider="sets: true">
        <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m slider-item" uk-height-match="row:true">
          <li>
            <SingleSliderImage val1='Weeknd' val2='DenDera' alt="" />
          </li>
          <li>
            <SingleSliderImage val1='Joji' val2='Urban Grooves' alt="" />
          </li>
          <li>
            <SingleSliderImage val1='Eminem' val2='Sungara' alt="" />
          </li>
          <li>
            <SingleSliderImage val1='Dave' alt="" />
          </li>
          <li>
            <SingleSliderImage val1='Imagine Dragons' val2='Zumba' alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SingleSliderCircle;