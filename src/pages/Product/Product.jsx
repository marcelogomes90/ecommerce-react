/* eslint-disable react/prop-types */
import React from 'react';

function Product({ product }) {
  return (
    <p>{product.description}</p>
  );
}

export default Product;
