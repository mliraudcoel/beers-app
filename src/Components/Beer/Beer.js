import React, { useContext } from 'react';
import CtxBeers from '../CtxBeers';
import { useParams } from 'react-router-dom';
import './Beer.css';

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
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            {/* <div className="beer"> */}
            <img src = {beer.image_url} alt={beer.tagline} />
            <p>{beer.description}</p>
            {/* </div> */}
          </div>
        )
      })}
      {/* <p>Add a comment on that beer</p>
      <input type="text"></input> */}
    </div>
  );
};

export default Beer; 