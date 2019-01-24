import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import json from "../api/json";
import NavBar from "./NavBar";
import Carouselz from "./Carouselz";
import SearchBar from "./SearchBar";
import OnCatagory from "./OnCatagory";
import OnPrice from "./OnPrice";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import Team from "./Team";

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
      <Router>
        <div
          className="container"
          style={{ marginTop: "10px", minHeight: "1320px" }}
        >
          <NavBar />
          <Switch>
            <Route exact path="/" component={Carouselz} />
            <Route exact path="/team" component={Team} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

{
  /* <Router>
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
</Router> */
}
