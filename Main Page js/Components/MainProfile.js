import React from 'react'
import '../../Main Page css/Components/MainProfile.css'
import { Link } from 'react-router-dom'
import MainProfileHead from './MainProfileHead'

const MainProfile=()=>{
  return (
    <>
      <Link to="/home_page" className='back-icon-hierarchy'>&#8249;</Link>
      <MainProfileHead />
    </>
  )
}
export default MainProfile