import React from 'react'
import '../../Main Page css/Components/ViewAllHierachyHead.css'
import DropdownDotsTitle from './Library/DropdownDotsTitle'
import { Link } from 'react-router-dom'
const ViewAllHierarchyHead=(props)=>  {
  return (
    <>
      <div class='view-all-hierarchy-title'>
        <Link to="/home_page" className='back-icon-hierarchy'>&#8249;</Link>
        <div class='view-all-hierarchy-text'>
          {props.value}
        </div>
        <div className='dropdown-icon-hierarchy'>
          <DropdownDotsTitle />
        </div>
      </div>
    </>
  )
}
export default ViewAllHierarchyHead