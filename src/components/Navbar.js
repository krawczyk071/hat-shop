import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/cartContext";

const Navbar = () => {
  // const [cart, setCart] = useState([]);
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
            <Link to={"/sale"}>Sale</Link>
          </li>
        </ul>
        <div className="navbar__logo">
          <div className="navbar__logo-bg">
            <span>BigHead</span>
          </div>
        </div>
        <ul className="navbar__list">
          <li className="navbar__item">
            Basket (
            {cart.reduce((acc, item) => {
              return acc + item.qty;
            }, 0)}
            )
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
