import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.jpg";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Ornitiva Logo" />
        
      </div>
      <ul className="nav-menu">
        <li>
          <Link style={{textDecoration: 'none'}} to="/" onClick={() => setMenu("home")}>Home</Link>
          {menu === "home" && <hr />}
        </li>
        <li>
          <Link style={{textDecoration: 'none'}} to="/necklace" onClick={() => setMenu("necklace")}>Necklace</Link>
          {menu === "necklace" && <hr />}
        </li>
        <li>
          <Link style={{textDecoration: 'none'}} to="/bracelets" onClick={() => setMenu("bracelets")}>Bracelets</Link>
          {menu === "bracelets" && <hr />}
        </li>
        <li>
          <Link style={{textDecoration: 'none'}} to="/earrings" onClick={() => setMenu("earrings")}>Earrings</Link>
          {menu === "earrings" && <hr />}
        </li>
        <li>
          <Link style={{textDecoration: 'none'}} to="/gift_cards" onClick={() => setMenu("gift_cards")}>Gift Cards</Link>
          {menu === "gift_cards" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <button>
            <img src={cart_icon} alt="Cart Icon" />
          </button>
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
