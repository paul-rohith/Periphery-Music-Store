import React from 'react'
import "./rnbItem.css";

const RnBItem = ({item}) => {
  return (
    <div>
        <div className='rnb-item-cover'>
            <img src = {item.cover}
            className = 'rnb-item-image' 
            alt = {item.title}/>
        </div>
        <div className='rnb-item-title'>{item.title}</div>
    </div>
  )
}

export default RnBItem