import React from 'react'
import ExploreSection from '../common/exploreSection';
import { albums } from '../../data/albums';
import Filters from "../common/filters";
import "./RnB.css";
import RnBCollections from './RnBCollections';

const RnBFilters=[
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


const RnB = () => {
  return (
    <div>
      <div className='max-width'>
      <Filters filterList={RnBFilters}/>
      </div>
      <RnBCollections/>
      <ExploreSection list = {albumsList} collectionName = 'Albums Available!'/>
      
    </div>
  )
}

export default RnB