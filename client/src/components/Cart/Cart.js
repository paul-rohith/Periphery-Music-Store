import React, { createContext, useEffect, useReducer, useState } from 'react';
import Items from './Items';
import { Scrollbars } from 'react-custom-scrollbars-2';
import arrow from '../../images/arrow.png';
import cart from '../../images/cart.png';
import dummy from '../../images/dummy.jpg';
import './Cart.css';
import ContextCart from './ContextCart';
import { reducer } from './reducer';

export const CartContext = createContext({});

const Cart = ({ cid }) => {
  const initialState = {
    item: [],
    totalAmount: 0,
    totalItem: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const getCart = async ({ cid }) => {
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
        const response = await fetch(`http://localhost:3500/user/addToCart/1`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.status === 400) {
          console.log('Missing Details');
        } else if (response.status === 401) {
          console.log('Unauthorised');
        } else if (response.status === 402) {
          console.log('Email ID not in Database');
        } else if (response.status === 200) {
          const data = await response.json();
          console.log('waiting');
          console.log(data);
          dispatch({
            type: 'SET_ITEMS',
            payload: data,
          });
          //console.log(data[0].customer_id);
        } else {
          console.log('New Error');
        }
      } catch (err) {
        console.log(err);
      }
    };
    getCart((cid = { cid }));
  }, []);
  // const [item, setItem] = useState(products);

  console.log('initial', initialState.item);

  console.log('state', state);
  const removeItem = (album_id) => {
    return dispatch({
      type: 'REMOVE_ITEM',
      payload: album_id,
    });
  };

  // const clearCart = () => {
  //     return dispatch({
  //         type: "CLEAR_CART"
  //     })
  // }
  const increment = (album_id) => {
    return dispatch({
      type: 'INCREMENT',
      payload: album_id,
    });
  };

  const decrement = (album_id) => {
    return dispatch({
      type: 'DECREMENT',
      payload: album_id,
    });
  };
  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
  }, [state.item]);
  const pState = { ...state, removeItem, increment, decrement };
  return (
    <>
      <CartContext.Provider value={pState}>
        <ContextCart cid={cid} />
      </CartContext.Provider>
    </>
  );
};

export default Cart;
