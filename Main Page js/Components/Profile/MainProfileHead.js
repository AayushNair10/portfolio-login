import React from 'react'
import MainProfileHeadName from './MainProfileHeadName'
import '../../../Main Page css/Components/Profile/MainProfileHead.css'

const MainProfileHead =(props)=> {
  return (
    <div className='main-profile-head'>
      <div>
        <img className="main-profile-head-col" src={require('../../../others/glimpse-of-us.png')} alt="album" />
      </div>
      <div className="main-profile-head-col">
        <MainProfileHeadName name={props.name}/>
      </div>
      <div className='main-profile-head-col go-right'>
        &#8250;
      </div>
    </div>
  )
}
export default MainProfileHead;