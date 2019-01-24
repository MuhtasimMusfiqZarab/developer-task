import React, { Component } from "react";

class OnPrice extends Component {
  state = {};
  render() {
    return (
      <div className="col-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            aria-label="Text input with dropdown button"
            placeholder="Sort On Price"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary dropdown-toggle "
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            />
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/">
                Action
              </a>
              <a className="dropdown-item" href="/">
                Another action
              </a>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
              <div role="separator" className="dropdown-divider" />
              <a className="dropdown-item" href="/">
                Separated link
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OnPrice;
