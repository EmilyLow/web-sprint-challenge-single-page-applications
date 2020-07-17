import React from "react";

import { Route, Link } from 'react-router-dom';

import HomePage from './HomePage.js';
import PizzaForm from './PizzaForm.js';

const App = () => {
  return (
    <div>
      
      <header>
        <h1>Lambda Eats</h1>
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        </header>
      
      <Route exact path ="/" component={HomePage}/>
      <Route path="/pizza" component={PizzaForm}/>
      
    </div>
      
   
   
  );
};
export default App;
