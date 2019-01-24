import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import json from "../api/json";
import NavBar from "./NavBar";
import Carouselz from "./Carouselz";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";

class App extends Component {
  state = { products: [] };

  onSearchSubmit = async term => {
    const response = await json.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ products: response.data.results });
    console.log(response.data.results);
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "10px" }}>
        <NavBar />
        <Carouselz />
        <SearchBar searchOnSubmit={this.onSearchSubmit} />
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default App;
