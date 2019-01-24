import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import json from "../api/json";
import NavBar from "./NavBar";
import Carouselz from "./Carouselz";
import SearchBar from "./SearchBar";
import OnCatagory from "./OnCatagory";
import OnPrice from "./OnPrice";
import ProductList from "./ProductList";
import Pagination from "./Pagination";

class App extends Component {
  state = { products: [] };

  putPagination = () => {
    if (this.state.products.length > 0) {
      return <Pagination />;
    }
  };

  onSearchSubmit = async term => {
    const response = await json.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ products: response.data.results });
  };

  render() {
    return (
      <div
        className="container"
        style={{ marginTop: "10px", minHeight: "1320px" }}
      >
        <NavBar />
        <Carouselz />
        <div className="row">
          <SearchBar searchOnSubmit={this.onSearchSubmit} />
          <OnCatagory />
          <OnPrice />
        </div>
        <ProductList products={this.state.products} />
        <div>{this.putPagination()}</div>
      </div>
    );
  }
}

export default App;
