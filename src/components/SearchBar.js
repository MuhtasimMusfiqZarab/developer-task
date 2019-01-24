import React, { Component } from "react";

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
      <div className="row">
        <div className="col-4">
          <form action="" onSubmit={this.onFormSubmit}>
            <div className="form-group">
              <input
                type="text"
                type="text"
                class="form-control"
                id="SearchBar"
                onChange={e => this.setState({ term: e.target.value })}
                placeholder="Search by Name"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
