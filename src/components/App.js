import React, { Component } from "react";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {};

  onSearchSubmit = term => {
    console.log(term);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar searchOnSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
