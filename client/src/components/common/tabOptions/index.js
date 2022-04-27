import React from 'react'
import music1 from '../../../images/musical-notes.png'
import music2 from '../../../images/musical-note.png'
import "./tabOptions.css";

const tabs = [
  {
    id: 1,
    name: "Pop",
    active_img: music1,
    backdrop: "#FCEEC0",
    inactive_img: music2,
  },
  {
    id: 2,
    name: "Rock",
    active_img: music1,
    backdrop: "#E5F3F3",
    inactive_img: music2,
  },
  {
    id: 3,
    name: "RnB",
    active_img: music1,
    backdrop: "#EDf4FF",
    inactive_img: music2,
  },
];
const TabOptions = ({activeTab, setActiveTab}) => {
  return (
    <div className='tab-options'>
      <div className='max-width options-wrapper'>
        {tabs.map((tab)=>{
          return (
            <div onClick={() => setActiveTab(tab.name)}
            className = {`tab-item absolute-center cur-po ${activeTab===tab.name && "active-tab"}`}
            >
            <div className = 'tab-image-container absolute-center'
              style = {{backgroundColor: `${activeTab===tab.name?tab.backdrop: ""}`}}>
              <img className='tab-image' alt={tab.name} src = {activeTab===tab.name? tab.active_img: tab.inactive_img}/>
            </div>
            <div className='tab-name'>{tab.name}</div>
            </div>
          )
        })}
      </div>
    </div>
    
  )
}

export default TabOptions;
