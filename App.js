import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Snack from './Snack';

const snacks = [
  { id: 1, name: 'Chips', description: 'Crunchy and salty.' },
  { id: 2, name: 'Candy Bar', description: 'Sweet and delicious.' },
  { id: 3, name: 'Soda', description: 'Refreshing and fizzy.' }
];

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VendingMachine snacks={snacks} />} />
        <Route path="/snack/:id" element={<SnackDetails />} />
      </Routes>
    </Router>
  );
};

const SnackDetails = () => {
  const { id } = useParams();
  const snack = getSnackById(parseInt(id));

  return (
    <div>
      {snack ? (
        <Snack name={snack.name} description={snack.description} />
      ) : (
        <div>Snack not found!</div>
      )}
    </div>
  );
};

const getSnackById = (id) => {
  return snacks.find(snack => snack.id === id);
};

export default App;
