import React, { Component } from "react";

class ProductCard extends Component {
  state = {};
  render() {
    const { description, urls } = this.props.product;
    return (
      <div>
        <img src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ProductCard;
