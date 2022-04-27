import React, { useState } from 'react'
import {BrowserRouter} from "react-router-dom";
import { render } from "react-dom";
import { Link } from "react-router-dom";

import Header from "../../components/common/header";
import TabOptions from '../../components/common/tabOptions';
import Footer from '../../components/common/footer';
import Pop from "../../components/Pop"
import Rock from "../../components/Rock"
import RnB from "../../components/RnB"
import OrderCart from "../../components/common/OrderCart"

const HomePage = () => {
    const [activeTab, setActiveTab] = useState("Pop");

  return (
    <div>
        <BrowserRouter>
        <Header />
        <TabOptions activeTab = {activeTab} setActiveTab = {setActiveTab}/>
        {getCorrectScreen(activeTab)}
        
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

// render (
//     <BrowserRouter>
//         <Routes>
//             <Route path = "/" element = {<Pop/>}/>
//             <Route path = "/ordercart" element = {<OrderCart/>}/>
//             {/* <Route path="/"element={<Navigate t o= "/" replace />}/> */}
//         </Routes>
//     </BrowserRouter>,
//     document.getElementById("root")
// )

const getCorrectScreen = (tab) => {
    switch(tab) {
        case "Pop":
            return <Pop/>
        case "Rock":
            return <Rock/>
        case "RnB":
            return <RnB/>
        default:
            return <Pop/>
    }
};
export default HomePage;