import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { HomeContext } from "../Context/HomeContext";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/Description/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(HomeContext);
  const { productId } = useParams();

  if (!all_product || all_product.length === 0) {
    return <div>Loading...</div>;
  }

  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
};

export default Product;
