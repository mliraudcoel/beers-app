import React, { useContext } from 'react';
import CtxBeers from './CtxBeers';

const ListBeers = () => {
  const beers = useContext(CtxBeers);
  return(
    <div>
    {beers.map((beer, index) => {
      return <a href={`beers/${beer.id}`} key={index}>{beer.name} - {beer.tagline} - <i>{beer.first_brewed}</i></a> 
      })}
    </div>
  );
};

export default ListBeers; 