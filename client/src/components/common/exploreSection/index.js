import React from 'react';
import ExploreCard from './exploreCard';
import './exploreSection.css';

const ExploreSection = ({ list, cid, collectionName }) => {
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {list.map((albums) => {
          return <ExploreCard albums={albums} cid={cid} />;
        })}
      </div>
    </div>
  );
};

export default ExploreSection;
