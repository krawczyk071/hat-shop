import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/cartContext";
import CartBar from "./CartBar";

const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setBurgerOpen((prev) => !prev);
  };
  const [cartOpen, setCartOpen] = useState(false);
  function cartToggler() {
    setCartOpen((prev) => !prev);
  }
  const cart = useContext(cartContext);
  return (
    <div className="header">
      <nav className="navbar">
        <ul className={`navbar__list ${burgerOpen ? "open" : ""}`}>
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
          <div className="navbar__logo__bg">
            <span>BigHead</span>
          </div>
        </div>
        <ul className={`navbar__list ${burgerOpen ? "open" : ""}`}>
          <li className="navbar__item">
            <Link to={"/filtered"}>
              WinterSpecial <i className="fa-regular fa-snowflake"></i>
            </Link>
          </li>
          <li className="navbar__item" onClick={cartToggler}>
            <div className="likeA">
              Basket (
              {cart
                ? cart.reduce((acc: number, item: { qty: number }) => {
                    return acc + item.qty;
                  }, 0)
                : 0}
              )
            </div>
          </li>
        </ul>
        <button className="nobtn burger__btn" onClick={toggleBurger}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
      <CartBar cartOpen={cartOpen} cartToggler={cartToggler} />
    </div>
  );
};

export default Navbar;
