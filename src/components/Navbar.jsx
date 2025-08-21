import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <header>
      <div className="container">
        <h2>
          <Link to="/">ContextStore</Link>
        </h2>
        <nav>
          <NavLink to="/">home</NavLink>
          <NavLink to="/contact">contact</NavLink>
          <div className="header__card">
            <span className="header__card__indicator">6</span>
            <FaShoppingCart />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
