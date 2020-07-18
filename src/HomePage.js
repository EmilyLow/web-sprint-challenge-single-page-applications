import React from 'react';
import { Route, Link } from 'react-router-dom';

const HomePage = props => {
  return (
      <div>
          <h1>Home of Lambda Pizza</h1>
          
     <Link to={"/pizza"}>
        <p>Order Pizza!</p>
      </Link>
      </div>
      
  );
};

export default HomePage;
