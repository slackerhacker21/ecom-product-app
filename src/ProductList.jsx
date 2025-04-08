// ProductList.jsx
import React from "react";
import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";

function ProductList({ products }) {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
