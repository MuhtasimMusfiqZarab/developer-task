import React from "react";
import "./Team.css";
import Pic1 from "../img/Team1.png";
import Pic2 from "../img/programmer.gif";
import Pic3 from "../img/prog.jpg";

const Team = () => {
  return (
    <div>
      <div id="team" className="container-fluid padding">
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4">
              <i className="fas fa-male icon" />
              Meet the Team
            </h1>
          </div>
          <hr />
        </div>
      </div>
      <div className="caontainer-fluid padding  ">
        <div className="row padding">
          <div className="col-xs-12 col-md-10 col-lg-4">
            <div className="card ">
              <img src={Pic2} alt="" className="card-img-top image" />
              <div className="card-body">
                <h4 className="card-title">Muhtasim Musfiq Zarab</h4>
                <p className="card-text">
                  I am currently working with different front and back-end web
                  technologies with 1 year of experience for designing front-end
                  web applications.
                </p>
                <a
                  href="https://www.linkedin.com/in/muhtasimmusfiqzarab/"
                  className="btn btn-outline-secondary"
                >
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-10 col-lg-4">
            <div className="card ">
              <img src={Pic1} alt="Programmer" className="card-img-top image" />
              <div className="card-body">
                <h4 className="card-title">Muhtasim Musfiq Zarab</h4>
                <p className="card-text">
                  I am currently working with different front and back-end web
                  technologies with 1 year of experience for designing front-end
                  web applications.
                </p>
                <a
                  href="https://www.linkedin.com/in/muhtasimmusfiqzarab/"
                  className="btn btn-outline-secondary"
                >
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-10 col-lg-4">
            <div className="card ">
              <img src={Pic3} alt="" className="card-img-top image" />
              <div className="card-body">
                <h4 className="card-title">Muhtasim Musfiq Zarab</h4>
                <p className="card-text">
                  I am currently working with different front and back-end web
                  technologies with 1 year of experience for designing front-end
                  web applications.
                </p>
                <a
                  href="https://www.linkedin.com/in/muhtasimmusfiqzarab/"
                  className="btn btn-outline-secondary"
                >
                  See Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
