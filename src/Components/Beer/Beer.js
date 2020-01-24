import React, { useContext, useState, useEffect } from 'react';
import CtxBeers from '../CtxBeers';
import { useParams } from 'react-router-dom';
import './Beer.css';
import axios from 'axios';

const Beer = () => {
  const addressAPI = 'http://localhost:8000';
  const beers = useContext(CtxBeers); // array 25 beers
  const beerId= useParams().id; // param indicated in navigator
  console.log(beerId)
  const [form, setForm] = useState({
    pseudo:'',
    comment:'',
    rate:''
  });
  console.log(form)
  const [comments, setComments] = useState([{
    pseudo:'',
    comment:'',
    rate:''
  }]);

  const addComment = (event) => {
  event.preventDefault();
   axios.post(`${addressAPI}/comments`, {
     pseudo: form.pseudo,
     comment: form.comment,
     rate: form.rate,
     beer_id: beerId,
   });
  };

  useEffect(() => {
    axios.get(`${addressAPI}/comments/${beerId}`)
    .then(response => {
      console.log(response.data);
      setComments(response.data);
    })
  },[]);

  console.log(comments);

  return(
    <div>
      {beers.filter(beer => beer.id === parseInt(beerId)).map((beer, index) => {
        // We convert beerId from string to integer in order to verify the equality
        return(
          <div key={index}>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <img src = {beer.image_url} alt={beer.tagline} />
            <p>{beer.description}</p>
          </div>
        )
      })}
      <form>
        <label htmlFor="h4 mb-4"> Votre pseudo </label>
        <div className="container-input">
          <input type="text" id="defaultContactFormName" onChange={(event) => setForm({...form, pseudo: event.target.value})} value={form.pseudo} />
        </div>
          <label htmlFor="h4 mb-4"> Votre commentaire </label>
        <div className="container-input">
          <input type="text" className="input-comment" id="defaultContactFormName" onChange={(event) => setForm({...form, comment: event.target.value})} value={form.comment} />
        </div>
        <label htmlFor="h4 mb-4"> Votre note </label>
        <div className="container-input">
          <select name="rate" id="rate-selected" onChange={(event) => setForm({...form, rate:event.target.value})} value={form.rate}>
          <option value="">Notez sur 10</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        </div>
        <div className="container-input">
          <button onClick={addComment}>Envoyer</button>
        </div>
      </form>
      {comments.map((comment, index) => {
        return(
          <div key={index}>
            <h3>{comment.pseudo}</h3>
            <p>{comment.comment}</p>
            <p>{comment.rate}</p>
          </div>
        )
      })}
    </div>
  );
};

export default Beer; 