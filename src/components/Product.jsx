import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function Product({ product }) {
  const itemInCart = true;
  return (
    <div className="card">
      <img src={product.image} alt="" className="card__image" width={50} />
      <div className="card__info">
        <h5 className="card__title">{product.title}</h5>
        <small className="card__price">price: ${product.price}</small>
      </div>
      {!itemInCart && (
        <button className="btn card__btn">
          <FaShoppingCart />
          Add
        </button>
      )}
      {itemInCart && (
        <div className="card-action-btns">
          <button className="btn card__btn__amount">&#8722;</button>
          <span className="amount">1</span>
          <button className="btn card__btn__amount">&#43;</button>
        </div>
      )}
    </div>
  );
}

export default Product;
