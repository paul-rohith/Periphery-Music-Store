import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "./exploreCard.css";


// const PAGE_PRODUCTS = 'products';
// const PAGE_CART = 'cart';

const ExploreCard = ({albums}) => {

//   const [cart, setCart] = useState([]);
//   const [page, setPage] = useState('albums');

//   const addToCart = ({albums}) => {
//   setCart([...cart, albums]);
// }

//   const navigateTo = (nextPage)  => {
//     setPage(nextPage);
//   }

  // const renderCart = () => {
  //   <>
  //   <h1>Cart</h1>
  //   <div>
  //     {cart.map((albums, idx) => {
  //       <div
  //         key = {idx}>
  //           <h3>{albums.name}</h3>
  //           <h4>{albums.cost}</h4>
  //       </div>
  //     })}
  //   </div>
  //   </>
  // }
  const name = albums?.album_name ?? "";
  const genre = albums?.genre ??"";
  const coverImg = albums?.img_url ?? "";
  const singer = albums?.artist ?? "";
  const price = albums?.price ?? "";
  const type = albums?.alb_type ?? "";
  const songs = albums?.songs?.map((item)=>item);

  return (
    <div className = 'explore-card cur-po'>
      <div className='explore-card-cover'>
        <img src = {coverImg} alt = {name} className = 'explore-card-image'/>
        {/* <div className='artist-name'>{name}</div> */}
      </div>
      <div className = 'album-row'>
        <div className='album-name'>{name}</div>
        <div className='singer'>{singer}</div>
      </div>
      <div className='album-row'>
        {songs.length && <div className='album-songs'>
        {songs.map((item, i)=> {
          return <span className='album-songs-tag'>{item}{i!==songs.length-1 && ", "}</span>
        })}
        </div>}
        {price && <div className='price'>Rs.{price}</div>}
      </div>
      <div><div className = 'card-separator'></div>
      <div className='explore-bottom'>
        <div className='bottom-text'>{type}</div>
        <button className = 'buy'>Buy Now</button>
      </div>
      </div>
      {/* <header>
        <button onCick={() => navigateTo(PAGE_CART)}>Go to Cart({cart.length})</button>
      </header> */}

      {/* {page === PAGE_PRODUCTS && ExploreCard()}
      {page === PAGE_CART && renderCart()} */}
    </div>
  )
}

export default ExploreCard