import React from "react";

const Pagination = () => {
  return (
    <div className="align-bottom">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a
              className="page-link"
              href="/"
              tabIndex="-1"
              aria-disabled="true"
              style={{ borderRadius: "100px", marginRight: "10px" }}
            >
              {`<<<`}
            </a>
          </li>

          <li className="page-item">
            <a
              className="page-link"
              href="/"
              style={{ borderRadius: "100px", marginRight: "10px" }}
            >
              {`>>>`}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
