import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/cartContext";
import CartBar from "./CartBar";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  function cartToggler() {
    setCartOpen((prev) => !prev);
  }
  const [cart, dispatch] = useContext(cartContext);
  return (
    <div className="header">
      <nav className="navbar layout-lg">
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="navbar__item">
            <Link to={"/shop"}>Explore</Link>
          </li>
          <li className="navbar__item">
            <Link to={"/sale"}>NBAedition</Link>
          </li>
        </ul>
        <div className="navbar__logo">
          <div className="navbar__logo-bg">
            <span>BigHead</span>
          </div>
        </div>
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to={"/filtered"}>
              WinterSpecial <i className="fa-regular fa-snowflake"></i>
            </Link>
          </li>
          <li className="navbar__item" onClick={cartToggler}>
            Basket (
            {cart.reduce((acc, item) => {
              return acc + item.qty;
            }, 0)}
            )
          </li>
        </ul>
      </nav>
      <CartBar cartOpen={cartOpen} cartToggler={cartToggler} />
    </div>
  );
};

export default Navbar;
