import React, { Component } from "react";
import json from "../api/json";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";

class App extends Component {
  state = { products: [] };

  onSearchSubmit = async term => {
    const response = await json.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ products: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar searchOnSubmit={this.onSearchSubmit} />
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default App;
