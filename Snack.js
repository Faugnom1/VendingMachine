import React from 'react';
import { Link } from 'react-router-dom';

const Snack = ({ name, description }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Snack;
