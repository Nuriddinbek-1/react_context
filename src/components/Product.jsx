import { FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from "../context/useGlobalContext";

function Product({ product }) {
  const { dispatch, cart } = useGlobalContext();
  const itemInCart = cart.find((item) => item.id == product.id);
  return (
    <div className="card">
      <img src={product.image} alt="" className="card__image" width={50} />
      <div className="card__info">
        <h5 className="card__title">{product.title}</h5>
        <small className="card__price">price: ${product.price}</small>
      </div>
      {!itemInCart && (
        <button
          className="btn card__btn"
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: { ...product, amount: 1 },
            })
          }>
          <FaShoppingCart />
          Add
        </button>
      )}
      {itemInCart && (
        <div className="card-action-btns">
          <button
            className="btn card__btn__amount"
            onClick={() => {
              if (itemInCart.amount == 1) {
                dispatch({ type: "DELETE", payload: itemInCart.id });
              } else {
                dispatch({ type: "DECREASE", payload: itemInCart.id });
              }
            }}>
            &#8722;
          </button>
          <span className="amount">{itemInCart.amount}</span>
          <button
            className="btn card__btn__amount"
            onClick={() =>
              dispatch({ type: "INCREASE", payload: itemInCart.id })
            }>
            &#43;
          </button>
        </div>
      )}
    </div>
  );
}

export default Product;
