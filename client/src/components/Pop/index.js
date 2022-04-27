import React, {useState} from 'react'
import ExploreSection from '../common/exploreSection';
import { albums } from '../../data/albums';
import Filters from "../common/filters";
import "./Pop.css";
import PopCollections from './PopCollections';
import ExploreCard from '../common/exploreSection/exploreCard';


const PopFilters=[
  {
      id:1,
      icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
      title: "Filters",
  },
  {
      id: 2,
      title: "Price",
  },
  {
    id: 3,
    title: "Release Year",
  },
];

const albumsList = albums;


const Pop = () => {
  // const[items, setItems] = useState(albums);

  // const filterItem = (categItem) => {
  //   const updatedItems = albums.filter((curElem)=> {
  //     return curElem.genre === categItem;
  //   });
  //   setItems(updatedItems);
  // }

  const [cart, setCart] = useState([]);

  const addToCart = ({albums}) => {
  setCart([...cart, albums]);
}



  return (
    <div>
      <div className='max-width'>
      <Filters filterList={PopFilters}/>
      </div>
      <PopCollections/>
      <ExploreSection list = {albums} collectionName = 'Albums Available!'/>
      
      
    </div>
  )
}

export default Pop