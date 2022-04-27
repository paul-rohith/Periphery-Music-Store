import React from 'react'
import "./popItem.css";

const PopItem = ({item}) => {
  return (
    <div>
        <div className='pop-item-cover'>
            <img src = {item.cover}
            className = 'pop-item-image' 
            alt = {item.title}/>
        </div>
        <div className='pop-item-title'>{item.title}</div>
    </div>
  )
}

export default PopItem