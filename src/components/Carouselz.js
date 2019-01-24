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
      <Carousel>
        <div>
          <img src={Caro1} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={Caro2} />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={Caro3} />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    );
  }
}

export default Carouselz;
