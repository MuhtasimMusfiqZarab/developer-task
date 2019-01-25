import React, { Component } from "react";

import Carouselz from "./Carouselz";
import OnCatagory from "./OnCatagory";
import OnPrice from "./OnPrice";

class SearchBar extends Component {
  state = { term: "" };

  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }
  onFormSubmit = event => {
    event.preventDefault();
    this.props.searchOnSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <Carouselz />
        <div className="row">
          <div className="col-4">
            <form action="" onSubmit={this.onFormSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="SearchBar"
                  onChange={e => this.setState({ term: e.target.value })}
                  placeholder="Search by Name"
                />
              </div>
            </form>
          </div>
          <OnCatagory />
          <OnPrice />
        </div>
      </div>
    );
  }
}

export default SearchBar;
