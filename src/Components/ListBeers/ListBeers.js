import React, { useContext } from 'react';
import CtxBeers from '../CtxBeers';
import './ListBeers.css';

const ListBeers = () => {
  const beers = useContext(CtxBeers);
  return(
    <div>
      <h1>Don't worry, beer happy</h1>
      <h2>Discover our catalog</h2>
      <div className="catalog">
    {beers.map((beer, index) => {
      return (
          <div className="beerList">
            <a href={`beers/${beer.id}`} key={index}>{beer.name} - {beer.tagline} - <i>{beer.first_brewed}</i></a> 
          </div>
      )
      })}
      </div>
    </div>
  );
};

export default ListBeers; 