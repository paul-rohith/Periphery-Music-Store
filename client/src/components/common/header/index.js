import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import periphery from '../../../images/periphery.png'
import user from '../../../images/user.png'

const Header = () => {
  return (
  <div className="max-width header">
    <img src = {periphery} alt = 'Periphery' className='header-logo'/>

    <div className='header-right'>
      <div className = 'header-cart-container'>
        <div className='cart-wrapper'>
          <div className='cart-icon-name'>
            <ul>
              <li>
                <Link to = "/cart" className='linkcart'>
                <i className="fi fi-rr-shopping-cart absolute-center cart icon"/>Cart</Link>
              </li>
            </ul>
          
          </div>
        </div>
        <div className='cart-separator'></div>
        <div className='header-searchbar'></div>
        <i className="fi fi-rr-search search-icon"></i>
        <input placeholder='Albums available down below!' className='search-input'></input>
      </div>
      <div>
        <div className='profile-wrapper'>
        <img src = {user} alt = 'User' className='header-profile-image'/>
        <span className='header-username'>User</span>
        <i className="fi fi-rr-angle-down absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  </div>

  
  );
};

export default Header;