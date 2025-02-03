import React, { useState } from 'react'
import '../../../Main Page css/Components/Profile/MainProfileGeneral.css'
import MainProfileHeadText from './MainProfileHeadText';
import { apiUrl } from '../UrlLink';

const MainProfileGeneral=(props)=> {
  const [activeTab, setActiveTab] = useState(null);
  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };
  
  return (
    <div className='main-profile-g'>
      <MainProfileHeadText title='General' />
      <div className="uk-card uk-card-default uk-card-body main-profile-general">
        <ul className="uk-nav-default uk-nav-parent-icon" uk-nav="multiple: true">
          {props.data.menu.map((category) => (
            <li className={`uk-parent ${activeTab === 'categories' ? 'uk-open' : ''}`}>
              <a className='main-profile-general-card' onClick={() => toggleTab('categories')} href="/#">
                {category.text}
              </a>
              <ul className="uk-nav-sub">
                {category.items.map((items) => (
                  <li className={`uk-parent ${activeTab === 'categories' ? 'uk-open' : ''}`}>
                    <a className='main-profile-general-card2' onClick={() => toggleTab('categories')} href={`${apiUrl}&${props.phno}&${items.mlink}`} >
                      {items.text}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default MainProfileGeneral;