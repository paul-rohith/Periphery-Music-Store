import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { render } from "react-dom";
// import { Link } from "react-router-dom";

import Header from '../../Dashboard/Customer/header';
import TabOptions from '../Customer/tabOptions';
import Footer from '../../Dashboard/Customer/footer';
import Account from './Account';
import PastOrders from './PastOrders';

// import OrderCart from "../../components/common/OrderCart"

const Customer = ({ user }) => {
  const [activeTab, setActiveTab] = useState('Account');
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getPastOrders = async () => {
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
          `http://localhost:3500/user/orderHistory/${user.customer_id}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.status === 200) {
          const data = await response.json();
          console.log(data);
          setOrders(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getPastOrders();
    console.log(orders);
  }, [activeTab]);
  const getCorrectScreen = (tab) => {
    switch (tab) {
      case 'Account':
        return <Account user={user} />;
      case 'Past Orders':
        return <PastOrders orders={orders} />;
      default:
        return <Account />;
    }
  };

  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
        {getCorrectScreen(activeTab)}

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Customer;
