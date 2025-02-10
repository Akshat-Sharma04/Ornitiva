import React, { useState } from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="descriptionbox">
      {/* Tab Navigation */}
      <div className="descriptionbox-navigator">
        <div
          className={`description-nav-box ${activeTab === "description" ? "active" : ""}`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </div>
        <div
          className={`description-nav-box ${activeTab === "reviews" ? "active" : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (122)
        </div>
      </div>

      {/* Content Sections */}
      {activeTab === "description" && (
        <div className="descriptionbox-content">
          <p>
            An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. 
            It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and 
            conduct transactions without the need for a physical presence. 
          </p>
          <p>
            E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations 
            (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
          </p>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="descriptionbox-content">
          <p>Here are customer reviews for this product:</p>
          <p>
            ⭐⭐⭐⭐⭐ - "Amazing product! Totally worth it!"  
            ⭐⭐⭐⭐ - "Good quality but took time to deliver."  
            ⭐⭐⭐⭐⭐ - "Absolutely love it! Will buy again."
          </p>
        </div>
      )}
    </div>
  );
};

export default DescriptionBox;
