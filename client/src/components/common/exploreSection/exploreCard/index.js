import React from 'react';
import './exploreCard.css';

const ExploreCard = ({ albums, cid }) => {
  const id = albums?.album_ID ?? '';
  const name = albums?.album_name ?? '';
  const coverImg = albums?.image_url ?? '';
  const singer = albums?.artist ?? '';
  const price = albums?.price ?? '';
  const type = albums?.alb_type ?? '';
  const songs = albums?.songs?.map((item) => item);
  const addToCart = async () => {
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
      const response = await fetch('http://localhost:3500/user/addToCart', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer_ID: 1,
          alb_type: type,
          album_ID: id,
          quantity: 1,
        }),
      });
      if (response.status === 400) {
        console.log('Missing Details');
      } else if (response.status === 401) {
        console.log('Unauthorised');
      } else if (response.status === 402) {
        console.log('Email ID not in Database');
      } else if (response.status === 200) {
        const data = await response.json();
      } else {
        console.log('New Error');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="explore-card cur-po">
      <div className="explore-card-cover">
        <img src={coverImg} alt={name} className="explore-card-image" />
        {/* <div className='artist-name'>{name}</div> */}
      </div>
      <div className="album-row">
        <div className="album-name">{name}</div>
        <div className="singer">{singer}</div>
      </div>
      <div className="album-row">
        {songs.length && (
          <div className="album-songs">
            {songs.map((item, i) => {
              return (
                <span className="album-songs-tag">
                  {item} key=i
                  {i !== songs.length - 1 && ', '}
                </span>
              );
            })}
          </div>
        )}
        {price && <div className="price">Rs.{price}</div>}
      </div>
      <div>
        <div className="card-separator"></div>
        <div className="explore-bottom">
          <div className="bottom-text">{type}</div>
          <button className="buy" onClick={addToCart}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
