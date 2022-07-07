import React, { useState, useEffect } from 'react';
/*import {BrowserRouter, Routes, Route} from "react-router-dom";
import { render } from "react-dom";
import { Link } from "react-router-dom";*/

import TabOptions from '../../components/common/tabOptions';
import Pop from '../../components/Pop';
import Rock from '../../components/Rock';
import RnB from '../../components/RnB';

const HomePage = ({ cid }) => {
  const [activeTab, setActiveTab] = useState('Pop');
  const [albums, setAlbums] = useState([]);

  const getCorrectScreen = (tab) => {
    switch (tab) {
      case 'Pop':
        return <Pop albums={albums} cid={cid} />;
      case 'Rock':
        return <Pop albums={albums} cid={cid} />;
      case 'RnB':
        return <Pop albums={albums} cid={cid} />;
      default:
        return <Pop albums={albums} cid={cid} />;
    }
  };

  useEffect(() => {
    const getProducts = async () => {
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
          `http://localhost:3500/user/products/${activeTab}`,
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
          setAlbums(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [activeTab]);

  return (
    <div>
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
    </div>
  );
};

/*render (
    <BrowserRouter>
        <Routes>
            <Route path = "/ordercart" element = {<OrderCart/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
)*/
export default HomePage;
