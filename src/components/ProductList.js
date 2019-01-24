import "./ProductList.css";
import React, { Component } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const ProductList = props => {
  const products = props.products.map(product => {
    return <ProductCard key={product.id} product={product} />;
  });

  return <div className="product-list">{products}</div>;
};

export default ProductList;
