import React from 'react';
import './PopCollections.css';
import Slider from 'react-slick';
import PopItem from './popItem';

import img1 from '../../../images/1.jpg';
import img2 from '../../../images/2.jpg';
import img3 from '../../../images/3.jpg';
import img4 from '../../../images/4.jpg';
import img5 from '../../../images/5.jpg';
import img6 from '../../../images/6.jpg';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';

const popItems = [
  {
    id: 1,
    title: 'The Weeknd',
    cover: img1,
  },
  {
    id: 2,
    title: 'Taylor Swift',
    cover: img2,
  },
  {
    id: 3,
    title: 'Lil Nas X',
    cover: img3,
  },
  {
    id: 4,
    title: 'Olivia Rodrigo',
    cover: img4,
  },
  {
    id: 5,
    title: 'The kid LAROI',
    cover: img5,
  },
  {
    id: 6,
    title: 'Labrinth',
    cover: img6,
  },
];

const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const PopCollections = () => {
  return (
    <div className="pop-collection">
      <div className="max-width">
        <div className="collection-title">Popular Right Now!</div>
        <Slider {...settings}>
          {popItems.map((item) => {
            return <PopItem key={item.id} item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default PopCollections;
