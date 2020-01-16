import React, { useContext } from 'react';
import CtxBeers from './CtxBeers';
import { useParams } from 'react-router-dom';

const Beer = () => {
  const beers = useContext(CtxBeers); // array 25 beers
  const beerId= useParams().id; // param indicated in navigator
  console.log(beerId)
  return(
    <div>
      {beers.filter(beer => beer.id === parseInt(beerId)).map((beer, index) => {
        // We convert beerId from string to integer in order to verify the equality
        return(
          <div key={index}>
            <p>{beer.name}</p>
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <img src = {beer.image_url} alt={beer.tagline} />
          </div>
        )
      })}
    </div>
  );
};

export default Beer; 