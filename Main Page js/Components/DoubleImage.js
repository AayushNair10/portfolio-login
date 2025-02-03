import React from "react";
import '../../Main Page css/Components/DoubleImage.css';

const DoubleImage = (props) => {
    return (
        <>
            <div className='double-image'>
                <div className='single-image'>
                    <img className="double-img" src={require('../../others/music-circle.png')} alt="music-circle" />
                    <span>{props.val1}</span>
                </div>
                <div className='single-image'>
                    <img className="double-img" src={require('../../others/music-circle.png')} alt="music-circle" />
                    <span>{props.val2}</span>
                </div>        
            </div>
        </>
    )
}
export default DoubleImage;