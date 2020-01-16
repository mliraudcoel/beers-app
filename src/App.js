import React, { useState, useEffect, useContext } from 'react';
import ListBeers from './Components/ListBeers/ListBeers';
import Beer from './Components/Beer/Beer';
import axios from 'axios';
import CtxBeers from './Components/CtxBeers';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {

  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers')
    .then(response => {
      console.log(response.data);
      setBeers(response.data);
    })
  },[]);

  return (
    <div className="App">
      <header className="App-header">
      <CtxBeers.Provider value={beers}>
        <Switch>
          <Route exact path="/" component={ListBeers} />
          <Route path="/beers/:id" component={Beer} />
        </Switch>
      </CtxBeers.Provider>
      </header>
    </div>
  );
}

export default App;
