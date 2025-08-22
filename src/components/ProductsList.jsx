import { useGlobalContext } from "../context/useGlobalContext";
import Product from "./Product";

function ProductsList({ products }) {
  const { totalPrice, dispatch } = useGlobalContext();
  return (
    <div className="card-container">
      <div className="card-container__header">
        <p className="card-container__title">Product list</p>
        <div>
          <span className="card-container__price">
            Total price: ${totalPrice}
          </span>
          <button
            className="btn card-container__btn"
            onClick={() => dispatch({ type: "CLEAR" })}>
            Clear
          </button>
        </div>
      </div>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductsList;
