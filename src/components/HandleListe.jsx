import React, { useState } from 'react';
import Checkout from './Checkout';

const HandleListe = ({ selectedProducts = [] }) => {
  const [name, setName] = useState('');
  const [toggleCheckout, setToggleCheckout] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBuyCart = () => {
    setToggleCheckout(!toggleCheckout);
  };

  const emptyCart = selectedProducts.length === 0;

  return (
    <div className="Header_container">
      <h2>Handleliste</h2>

      {toggleCheckout ? (
        <Checkout
          products={selectedProducts}
          setToggleCheckout={setToggleCheckout}
          toggleCheckout={toggleCheckout}
        />
      ) : (
        <>
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
            Kjøp handleliste for {name}
          </button>
        </>
      )}
    </div>
  );
};

export default HandleListe;
