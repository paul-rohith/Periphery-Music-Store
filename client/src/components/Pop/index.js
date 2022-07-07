import React, { useState } from 'react';
import ExploreSection from '../common/exploreSection';
import { albums } from '../../data/albums';
import Filters from '../common/filters';
import './Pop.css';
import PopCollections from './PopCollections';

const PopFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: 'Filters',
  },
  {
    id: 2,
    title: 'Price',
  },
  {
    id: 3,
    title: 'Release Year',
  },
];

const Pop = ({ albums, cid }) => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={PopFilters} />
      </div>
      <PopCollections />
      <ExploreSection
        list={albums}
        cid={cid}
        collectionName="Albums Available!"
      />
    </div>
  );
};

export default Pop;
