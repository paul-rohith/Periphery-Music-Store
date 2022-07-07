import React, { useContext } from 'react';
import { CartContext } from './Cart';

const Items = ({
  album_id,
  album_name,
  artist,
  image_url,
  price,
  alb_type,
  quantity,
}) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={image_url} alt={album_name}></img>
        </div>
        <div className="title">
          <h2>
            {album_name} ({alb_type})
          </h2>
          <p>{artist}</p>
        </div>
        <div className="add-minus-quantity">
          <i className="fa fa-minus" onClick={() => decrement(album_id)}></i>
          <input type="text" placeholder={quantity} />
          <i className="fa fa-plus add" onClick={() => increment(album_id)}></i>
        </div>

        <div className="price">
          <h3>Rs.{price} per piece</h3>
        </div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(album_id)}
          ></i>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;
