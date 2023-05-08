import React, { useState } from 'react';
import HandleListe from './HandleListe';

const HeaderWithCart = ({ numberOfProducts, selectedProducts }) => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <header className="header-container">
      <div className="header">
        <h1>Products</h1>
        <button onClick={toggleCart}>
          Handlekurv {numberOfProducts > 0 && `(${numberOfProducts})`}
        </button>
      </div>
      {showCart && <HandleListe selectedProducts={selectedProducts} />}
    </header>
  );
};

export default HeaderWithCart;
