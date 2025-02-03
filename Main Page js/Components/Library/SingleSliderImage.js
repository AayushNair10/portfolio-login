import React from "react";

const SingleSliderImage = (props) => {
    return (
        <>
            <div className='double-image'>
                <div className='single-image'>
                    <img className="double-img" src={require('../../../others/music-circle.png')} alt="music-circle" />
                    <span>{props.val1}</span>
                </div>
            </div>
        </>
    )
}
export default SingleSliderImage;