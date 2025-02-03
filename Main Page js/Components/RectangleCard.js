import React from "react";
import '../../Main Page css/Components/RectangleCard.css'
const RectangleCard = (props) =>{
    const cardStyle1 = {
        backgroundColor: props.color1,
    };
    const cardStyle2 = {
        backgroundColor: props.color2,
    };
    return(
        <>
            <div className='slider-imagee'>
                <div class="uk-card uk-card-body rectangle-card" style={cardStyle1}>
                    <div class="uk-card-title rectangle-card-text">  
                        {props.value1}
                        <img className='rectangle-card-img' src={require('../../others/glimpse-of-us.png')} alt={props.value1} />
                    </div>
                </div>
            </div>
            <br />
            <div className='slider-imagee'>
                <div class="uk-card uk-card-body rectangle-card" style={cardStyle2}>
                    <div class="uk-card-title rectangle-card-text">  
                        {props.value2}
                        <img className='rectangle-card-img' src={require('../../others/glimpse-of-us.png')} alt={props.value2} />
                    </div>
                </div>
            </div>   
        </>
    )
}
export default RectangleCard;