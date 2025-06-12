import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css'; 

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (err) {
        setError('Ocurrió un error al cargar los productos.');
        console.error(err); 
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); 

  if (loading) {
    return <div className="loading">Cargando productos... 🛍️</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="contenedor-productos">
      <h1>Catálogo de Productos</h1>
      <div className="catalogo">
        {products.map(product => (
          <div key={product.id} className="tarjeta-producto">
            <img src={product.image} alt={product.title} className="imagen-producto" />
            <div className="info-producto">
              <h2 className="titulo-producto">{product.title}</h2>
              <p className="precio-producto">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;