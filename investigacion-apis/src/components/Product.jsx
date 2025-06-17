import React from 'react';
import './Product.css';

function Product({ product }) {
  return (
    <div className="tarjeta-producto">
      <img src={product.image} alt={product.title} className="imagen-producto" />
      <div className="info-producto">
        <h2 className="titulo-producto">{product.title}</h2>
        <p className="precio-producto">${product.price}</p>
      </div>
    </div>
  );
}

export default Product;