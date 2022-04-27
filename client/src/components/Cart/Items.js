import React from 'react'
import dummy from "../../images/dummy.jpg"



const Items = ({album_name, artist, img_url, price, alb_type}) => {

  return (
    <>
    <div className='items-info'>
    <div className='product-img'>
        <img src = {img_url}></img>
    </div>
    <div className='title'>
        <h2>{artist}</h2>
        <p>{album_name}</p>
    </div>
    <div className='add-minus-quantity'>
        <i className = "fas fa-minus"></i>
        <input type = "text" placeholder = "1"/>
        <i className = "fas fa-plus"></i>
    </div>

    <div className='price'>
        <h3>Rs.{price} ({alb_type}) per piece</h3>
    </div>

    <div className='remove-item'>
        <i className = "fas fa-trash-alt add"></i>
    </div>
</div>
<hr/>
    </>
  )
}

export default Items