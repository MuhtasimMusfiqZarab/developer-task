import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Caro1 from "../img/pic1.jpg";
import Caro2 from "../img/pic2.jpg";
import Caro3 from "../img/pic3.jpg";

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
