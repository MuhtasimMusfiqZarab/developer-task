import React, { Component } from "react";

const ProductList = props => {
  const products = props.products.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });

  return <div>{products}</div>;
};

export default ProductList;
