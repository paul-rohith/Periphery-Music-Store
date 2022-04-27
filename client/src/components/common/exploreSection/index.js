import React, {useState} from 'react'
import ExploreCard from "./exploreCard";
import "./exploreSection.css";

const ExploreSection = ({list, collectionName}) => {

  const [cart, setCart] = useState([]);

  const addToCart = ({albums}) => {
  setCart([...cart, albums]);
}


  return (
    <div className='max-width explore-section'>
      <div className='collection-title'>{collectionName}</div>
      <div className='explore-grid'>
        {list.map((albums)=> {
          return <ExploreCard albums = {albums}/>

        })}
      </div>
    </div>
  )
}

export default ExploreSection