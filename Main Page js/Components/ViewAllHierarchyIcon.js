import React, { useContext } from 'react'
import '../../Main Page css/Components/ViewAllHierarchyIcon.css'
import { Link } from 'react-router-dom';
import PhoneContext from '../../others/PhoneContext';

const ViewAllHierarchyIcon=(props)=>  { 
  const phoneContextValue = useContext(PhoneContext);
  const ChangeMlink=()=>{
    phoneContextValue.SetMlink(props.mlink)
  }
  const value= props.name
  let LinkTo='';
  LinkTo=`/home_page/viewallgroup/${value}`;
  return (
    <div className='view-all-hierarchy-icon'>
      <Link to={LinkTo} onClick={ChangeMlink}>
        <img className="view-all-hierarchy-img" src={props.src} alt="" />
      </Link>
      <div className='slider-card-title'>
        {props.artist}
      </div>
    </div>
  )
}
export default ViewAllHierarchyIcon;