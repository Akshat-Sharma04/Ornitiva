import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx"; // Ensure ".jsx" for components
import Home from "./Pages/Home.jsx";
import HomeCategory from "./Pages/HomeCategory.jsx";
import Product from "./Pages/Product.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import Cart from "./Pages/Cart.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import necklace_banner from "./Components/Assets/banner_necklace.jpg";
import bracelet_banner from "./Components/Assets/banner_bracelet.jpg";
import earring_banner from "./Components/Assets/banner_earring.jpg";
import giftcard_banner from "./Components/Assets/banner_giftcard.jpg";

function App() {
  const [cartItems, setCartItems] = useState({});

  // Function to update quantity in cart
  const updateCartQuantity = (productId, newQuantity) => {
    setCartItems((prev) => {
      if (newQuantity <= 0) {
        const updatedCart = { ...prev };
        delete updatedCart[productId];
        return updatedCart;
      }
      return { ...prev, [productId]: newQuantity };
    });
  };

  // Function to remove an item from cart
  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[productId];
      return updatedCart;
    });
  };

  return (
    <BrowserRouter>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/necklace" element={<HomeCategory banner={necklace_banner} category="necklace" />} />
        <Route path="/bracelets" element={<HomeCategory banner={bracelet_banner} category="bracelets" />} />
        <Route path="/earrings" element={<HomeCategory banner={earring_banner} category="earrings" />} />
        <Route path="/gift_cards" element={<HomeCategory banner={giftcard_banner} category="gift_cards" />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              updateCartQuantity={updateCartQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
