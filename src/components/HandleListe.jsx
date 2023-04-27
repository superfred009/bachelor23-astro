import React, { useState } from 'react';

const HandleListe = ({ selectedProducts = [] }) => {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBuyCart = () => {
    alert('Kjøp handleliste for', name);
  };

  const emptyCart = selectedProducts.length === 0;

  return (
    <div>
      <h2>Handleliste</h2>
      <input
        type="text"
        placeholder="Skriv inn ditt navn"
        value={name}
        onChange={handleNameChange}
      />
      <h3>Velg produkter:</h3>
      <h3>Handleliste for {name}:</h3>
      <ul>
        {selectedProducts.map((product) => (
          <li key={product.id}>
            {product.title}
            {product.quantity > 1 && ` x ${product.quantity}`}
          </li>
        ))}
      </ul>
      <button onClick={handleBuyCart} disabled={emptyCart}>
        Kjøp handleliste
      </button>
    </div>
  );
};

export default HandleListe;
