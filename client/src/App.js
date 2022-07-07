import React, { useState } from 'react';
import HomePage from './pages/home';
import Header from './components/common/header';
import Footer from './components/common/footer';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Vendors from './pages/vendors';
import Cart from './components/Cart/Cart';
import Customer from './components/Dashboard/Customer';

const App = () => {
  const [user, setUser] = useState({});

  return (
    <div>
      <Header user={user} />
      <Switch>
        <Route exact path="/">
          <HomePage cid={user === {} ? 0 : user.customer_ID} />
        </Route>
        <Route exact path="/cart">
          <Cart cid={user.customer_ID} />
        </Route>
        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/vendors">
          <Vendors />
        </Route>
        <Route exact path="/dashboard">
          <Customer user={user} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
