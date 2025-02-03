import React from 'react'
import '../../../Main Page css/Components/Profile/MainProfileHeadName.css'

const MainProfileHeadName =(props)=> {
    return (
        <div className='main-profile-head-name'>
            <div>Hello, {props.name}</div>
            <div>View Profile</div>
            <button className='main-profile-head-name-button'>Free User</button>
        </div>
    )
}
export default MainProfileHeadName;