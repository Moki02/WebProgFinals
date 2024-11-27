import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard.js';

const HomePage = ({ addToCart }) => {
  
  const [products, setProducts] = useState([]);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification('Successfully added to cart!');
    setTimeout(() => setNotification(''), 3000); // Clear the notification after 3 seconds
  };

  return (
    <div style={{ paddingTop: '150px' }}>
      {/* Notification */}
      {notification && (
        <div
          style={{
            position: 'fixed',
            top: '10%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#4caf50',
            color: '#fff',
            padding: '20px 30px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            textAlign: 'center',
          }}
        >
          {notification}
        </div>
      )}

      {/* Product Cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map(product => (
          <ProductCard
            key={product._id}
            product={product}
            addToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
