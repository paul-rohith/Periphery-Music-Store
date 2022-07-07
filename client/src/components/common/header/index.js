import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import 'font-awesome/css/font-awesome.min.css';
import periphery from '../../../images/periphery.png';
import userimg from '../../../images/user.png';

const Header = ({ user }) => {
  return (
    <div className="max-width header">
      <Link to="/">
        <img src={periphery} alt="Periphery" className="header-logo" />
      </Link>

      <div className="header-right">
        <div className="header-cart-container">
          <div className="cart-wrapper">
            <div className="cart-icon-name">
              <Link to="/cart">
                <i className="fa fa-shopping-cart " color="#000000"></i>
              </Link>
            </div>
          </div>
          <div className="cart-separator"></div>
          <div className="header-searchbar"></div>
          <i className="fa fa-search" color="#000000"></i>
          <input
            placeholder="Albums available down below!"
            className="search-input"
          ></input>
        </div>
        <div>
          <Link to="/dashboard">
            <div className="profile-wrapper">
              <img src={userimg} alt="User" className="header-profile-image" />
              <span className="header-username">{user.first_name}</span>
              <i className="fi fi-rr-angle-down absolute-center profile-options-icon"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
