import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
// import { render } from "react-dom";
// import { Link } from "react-router-dom";

import Header from "../Vendor/header"
import TabOptions from "../Vendor/tabOptions";
import Footer from "../Customer/footer";
import Albums from "../Vendor/Albums"

// import OrderCart from "../../components/common/OrderCart"

const Customer = () => {
  const [activeTab, setActiveTab] = useState("Account");

  return (
    <div>
      <BrowserRouter>
        <Header />
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
        {getCorrectScreen(activeTab)}

        <Footer />
      </BrowserRouter>
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Albums":
      return <Albums />;
    default:
      return <Albums />;
  }
};
export default Customer;
