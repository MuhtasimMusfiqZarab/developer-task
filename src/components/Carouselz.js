import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Caro1 from "../img/img1.png";
import Caro2 from "../img/img2.png";
import Caro3 from "../img/img3.png";

class Carouselz extends Component {
  state = {};
  render() {
    return (
      <div>
        <Carousel>
          <div>
            <img src={Caro1} alt="Pic1" />
          </div>
          <div>
            <img src={Caro2} alt="Pic2" />
          </div>
          <div>
            <img src={Caro3} alt="Pic3" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Carouselz;
