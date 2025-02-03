import React, { useContext } from 'react'
import "../../Main Page css/Components/HeadingCard.css";
import PhoneContext from '../../others/PhoneContext';
import { Link } from "react-router-dom";

const HeadingCard = (props) => {
  const phoneContextValue = useContext(PhoneContext);
  const ChangeMlink=()=>{
    phoneContextValue.SetMlink(props.mlink)
  }
  const value  = props.value;
  const linkTo = props.view === "group" ? `/home_page/viewallgroup/${value}` : `/home_page/viewallhierarchy/${value}`;
  return (
    <>
      <div className="heading-name">
        {props.value}
        <Link className="view-all" to={linkTo} onClick={ChangeMlink}>
          See All &gt;
        </Link>
      </div>
    </>
  );
};
export default HeadingCard;