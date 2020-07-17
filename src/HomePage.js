import React from 'react';
import { Route, Link } from 'react-router-dom';

const HomePage = props => {
  return (
      <div>
          <p>Home Page</p>
     <Link to={"/pizza"}>
        <p>Order Pizza!</p>
      </Link>
      </div>
      
  );
};

export default HomePage;
