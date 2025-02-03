import React, { useEffect } from 'react';
import 'uikit/dist/css/uikit.min.css';
import '../../Main Page css/Components/DoubleSlider.css';
import DoubleImage from './DoubleImage';
import HeadingCard from './HeadingCard';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

const DoubleSlider = (props) => {
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
            <DoubleImage val1='AfroFusion' val2='DenDera' alt="" />
          </li>
          <li>
            <DoubleImage val1='Gospel' val2='Urban Grooves' alt="" />
          </li>
          <li>
            <DoubleImage val1='Afro Jazz' val2='Sungara' alt="" />
          </li>
          <li>
            <DoubleImage val1='Jiti' val2='Dancehall' alt="" />
          </li>
          <li>
            <DoubleImage val1='Hiphop' val2='Zumba' alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default DoubleSlider;