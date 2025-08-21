import React from "react";
import Product from "./Product";

function ProductsList({ products }) {
  return (
    <div className="card-container">
      <div className="card-container__header">
        <p className="card-container__title">Product list</p>
        <div>
          <span className="card-container__price">Total price: $130</span>
          <button className="btn card-container__btn">Clear</button>
        </div>
      </div>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductsList;
