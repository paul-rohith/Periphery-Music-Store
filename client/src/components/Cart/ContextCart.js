import React, { useContext, useState } from 'react';
import Items from './Items';
import { Scrollbars } from 'react-custom-scrollbars-2';
import arrow from '../../images/arrow.png';
import cart from '../../images/cart.png';
// import {products} from "./products"
import { CartContext } from './Cart';

const ContextCart = ({ cid }) => {
  // const [item, setItem] = useState(products);
  const { item, totalItem, totalAmount } = useContext(CartContext);
  console.log('item', item);
  const placeOrder = async (e) => {
    e.preventDefault();
    try {
      /*const response = await axios.post(
          LOGIN_URL,
          JSON.stringify({ user, pwd, role }),
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          }
        );*/
      const response = await fetch(
        `http://localhost:3500/user/placeOrder/${cid}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}),
        }
      );
      if (response.status === 400) {
        console.log('Missing Details');
      } else if (response.status === 401) {
        console.log('Unauthorised');
      } else if (response.status === 402) {
        console.log('Email ID not in Database');
      } else if (response.status === 200) {
        const data = await response.json();
        //console.log(data[0].customer_id);
      } else {
        console.log('New Error');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <header>
        <div className="continue-shopping">
          <img src={arrow} alt="arrow" className="arrow-icon" />
          <h3>Continue Shopping</h3>
        </div>
        <div className="cart-icon">
          <img src={cart} alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>
      <h1 className="total-items">
        You have <span className="total-items-count">{totalItem}</span> items in
        your shopping cart.
      </h1>

      <div className="cart-items">
        <div className="cart-tems-container">
          <Scrollbars style={{ width: 800, height: 500 }}>
            {item.map((curItem) => {
              return <Items key={curItem.album_id} {...curItem} />;
            })}
          </Scrollbars>
        </div>
      </div>

      <div>
        <div className="card-total">
          <h3>
            Cart Total: <span>Rs.{totalAmount}</span>
          </h3>
          <button onClick={placeOrder}>Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default ContextCart;
