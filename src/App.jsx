// src/App.jsx
import { useState } from 'react';
import ProductList from './ProductList';
import product1Image from "./images/product1.jpg"; // Import the image
import product2Image from "./images/product2.jpg"; 
import product3Image from "./images/product3.jpg";
import product4Image from "./images/product4.jpg";
import styles from './App.module.css';

function App() {
  const [products] = useState([
    { id: 1, name: 'Summer Tee', price: 10.99, description: 'Lightweight cotton t-shirt', image: product1Image },
    { id: 2, name: 'Denim Jacket', price: 49.99, description: 'Classic blue denim', image: product2Image },
    { id: 3, name: 'Flowy Skirt', price: 29.95, description: 'Perfect for spring and summer' , image: product3Image },
    { id: 4, name: 'Chic Sunglasses', price: 15.00, description: 'Block the sun in style' , image: product4Image },
    
  ]);

  return (
    <div className={styles.appContainer}>
      <h1>Welcome to StyleHaven Clothing</h1>
      <p>Explore the latest in fashion and discover your unique style.</p>
      <ProductList products={products} />
    </div>
  );
}

export default App;
