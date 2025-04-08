// ProductItem.jsx

import React from "react";
import styles from "./ProductItem.module.css";



function ProductItem({ product }) {
  return (
    <div className={styles.productItem}>
      <img 
        src={product.image} // Display the image passed from App.js
        alt={product.name}
        className={styles.productImage}
      />
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.productPrice}>${product.price}</p>
    </div>
  );
}

export default ProductItem;
