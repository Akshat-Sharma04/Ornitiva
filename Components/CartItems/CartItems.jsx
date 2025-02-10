import React, { useContext } from "react";
import "./CartItems.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { HomeContext } from "../../Context/HomeContext";

const CartItems = () => {
  const { cartItems, all_product, removeFromCart } = useContext(HomeContext);

  // Calculate subtotal and total
  const subtotal = all_product.reduce((acc, product) => {
    if (cartItems?.[product.id]?.quantity > 0) {
      const price = product.new_price || product.price || 0;
      acc += price * cartItems[product.id]?.quantity;
    }
    return acc;
  }, 0);

  const shippingFee = 0; // Assuming shipping is free
  const total = subtotal + shippingFee;

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      <div className="cart-header">
        <p>Product</p>
        <p>Name</p>
        <p>Size</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        
      </div>
      <hr />

      {all_product.map((product) => {
        if (cartItems?.[product.id]?.quantity > 0) {
          return (
            <div className="cart-item" key={product.id}>
              <img
                src={product.image || "fallback.jpg"}
                alt={product.name || "No Title"}
                className="cart-item-image"
              />
              <p className="cart-item-name">{product.name || "No Name Available"}</p>
              <p className="cart-item-size">{cartItems[product.id]?.selectedSize}</p>
              <p className="cart-item-price">${product.new_price || product.price || "0.00"}</p>
              <button className="cart-item-quantity">{cartItems[product.id]?.quantity}</button>
              <p className="cart-item-total">
                ${(product.new_price || product.price || 0) * cartItems[product.id]?.quantity}
              </p>
              <img
                src={remove_icon}
                onClick={() => removeFromCart(product.id)}
                alt="Remove"
                className="cart-item-remove"
              />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${total.toFixed(2)}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default CartItems;
