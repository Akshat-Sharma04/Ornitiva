import React, { useState, useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { HomeContext } from "../../Context/HomeContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(HomeContext);
  const [selectedSize, setSelectedSize] = useState(null); // State to store the selected size

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(product.id, selectedSize); // Pass selected size here
    } else {
      alert("Please select a size");
    }
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {[...Array(4)].map((_, index) => (
            <img key={index} src={product.image} alt={`product-thumbnail-${index}`} />
          ))}
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="Main product" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1 className="title">{product.name}</h1>
        <p className="productdisplay-right-description">
          Elevate your style with this stunning {product.name}.
        </p>
        <div className="productdisplay-right-star">
          {[...Array(4)].map((_, index) => (
            <img key={index} src={star_icon} alt="star" />
          ))}
          <img src={star_dull_icon} alt="star" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>

        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                className={`size-option ${selectedSize === size ? "selected" : ""}`}
                onClick={() => setSelectedSize(size)} // Set selected size
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <button onClick={handleAddToCart}>ADD TO CART</button>

        <p className="productdisplay-right-category">
          <span>Category: </span>Women, Jewellery, Necklace
        </p>
        <p className="productdisplay-right-category">
          <span>Tags: </span>Modern, Ornaments
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
