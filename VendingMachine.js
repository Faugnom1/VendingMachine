import React from 'react';
import { Link } from 'react-router-dom';

const VendingMachine = ({ snacks }) => {
  return (
    <div>
      <h1>Welcome to the Vending Machine!</h1>
      <ul>
        {snacks.map(snack => (
          <li key={snack.id}>
            <Link to={`/snack/${snack.id}`}>{snack.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VendingMachine;
