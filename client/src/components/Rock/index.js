import React from 'react'
import ExploreSection from '../common/exploreSection';
import { albums } from '../../data/albums';
import Filters from "../common/filters";
import "./Rock.css";
import RockCollections from './RockCollections';

const RockFilters=[
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


const Rock = () => {
  return (
    <div>
      <div className='max-width'>
      <Filters filterList={RockFilters}/>
      </div>
      <RockCollections/>
      <ExploreSection list = {albumsList} collectionName = 'Albums Available!'/>
      
    </div>
  )
}

export default Rock