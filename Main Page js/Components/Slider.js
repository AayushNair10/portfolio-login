import React, { useEffect } from 'react';
import 'uikit/dist/css/uikit.min.css';
import '../../Main Page css/Components/Slider.css'
import Card from './Card'
import HeadingCard from './HeadingCard';
import SizeCard from './Library/SizeCard';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

const Slider = (props) => {
  const size = props.size;
  const sizeClassName = SizeCard({ size }); 
  useEffect(() => {
    UIkit.update();
  }, []);
  return (
    <div className='slider-margin'>
      <HeadingCard  value={props.value} view={props.view} mlink={props.mlink}/>
      <div className="uk-position-relative uk-visible-toggle uk-light slider-class" tabIndex="-1" uk-slider="sets: true">
      <ul className={`uk-slider-items ${sizeClassName} uk-child-width-1-6@l uk-child-width-1-4@m uk-child-width-1-3@s slider-item`} uk-height-match="row:true">
          {props.items.map(item =>(
            <li>
              <Card name={item.name} 
                value={props.value} 
                view={item.ctype} 
                artist={item.sdesc} 
                audio={item.flink} 
                src={item.thumbnail} 
                Cmlink={item.mlink}
                Gmlink={props.mlink}
                category={props.category}
                alt="" 
              />
              <div class='slider-card-title'>{item.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Slider; 