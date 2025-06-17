import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
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
    return <div className="loading">Cargando productos...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="contenedor-productos">
      <h1>Catálogo de Productos</h1>

      <div className="catalogo">

        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
        
      </div>

    </div>
  );
}

export default ProductList;