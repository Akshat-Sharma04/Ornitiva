import React, { useContext } from "react";
import { HomeContext } from "../Context/HomeContext";
import CartItems from '../Components/CartItems/CartItems'

const Cart = () => {
  const { all_product, cartItems, removeFromCart } = useContext(HomeContext);

  return (
    <div>
      <h2>Your Cart</h2>
      <CartItems all_products={all_product} cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Cart;
