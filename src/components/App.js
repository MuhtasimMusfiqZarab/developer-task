import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import json from "../api/json";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import Team from "./Team";

class App extends Component {
  state = { products: [], nil: [] };

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
    console.log(this.state.products);
  };

  render() {
    return (
      <Router>
        <div
          className="container app"
          style={{ marginTop: "10px", minHeight: "1320px" }}
        >
          <NavBar />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <SearchBar searchOnSubmit={this.onSearchSubmit} />}
            />

            <Route exact path="/team" component={Team} />
          </Switch>
          <ProductList products={this.state.products} />
          <div>{this.putPagination()}</div>
        </div>
      </Router>
    );
  }
}

export default App;
