import React from 'react'
import "./rockItem.css";

const RockItem = ({item}) => {
  return (
    <div>
        <div className='rock-item-cover'>
            <img src = {item.cover}
            className = 'rock-item-image' 
            alt = {item.title}/>
        </div>
        <div className='rock-item-title'>{item.title}</div>
    </div>
  )
}

export default RockItem