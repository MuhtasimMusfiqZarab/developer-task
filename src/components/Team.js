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
              <i class="fas fa-male icon" />
              Meet the Team
            </h1>
          </div>
          <hr />
        </div>
      </div>
      <div class="caontainer-fluid padding  ">
        <div class="row padding">
          <div class="col-xs-12 col-md-10 col-lg-4">
            <div class="card ">
              <img src={Pic2} alt="" class="card-img-top image" />
              <div class="card-body">
                <h4 class="card-title">Muhtasim Musfiq Zarab</h4>
                <p class="card-text">
                  I am currently working with different front and back-end web
                  technologies with 1 year of experience for designing front-end
                  web applications.
                </p>
                <a
                  href="https://www.linkedin.com/in/muhtasimmusfiqzarab/"
                  class="btn btn-outline-secondary"
                >
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-10 col-lg-4">
            <div class="card ">
              <img src={Pic1} alt="Programmer" class="card-img-top image" />
              <div class="card-body">
                <h4 class="card-title">Muhtasim Musfiq Zarab</h4>
                <p class="card-text">
                  I am currently working with different front and back-end web
                  technologies with 1 year of experience for designing front-end
                  web applications.
                </p>
                <a
                  href="https://www.linkedin.com/in/muhtasimmusfiqzarab/"
                  class="btn btn-outline-secondary"
                >
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-10 col-lg-4">
            <div class="card ">
              <img src={Pic3} alt="" class="card-img-top image" />
              <div class="card-body">
                <h4 class="card-title">Muhtasim Musfiq Zarab</h4>
                <p class="card-text">
                  I am currently working with different front and back-end web
                  technologies with 1 year of experience for designing front-end
                  web applications.
                </p>
                <a
                  href="https://www.linkedin.com/in/muhtasimmusfiqzarab/"
                  class="btn btn-outline-secondary"
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
