import React, { Component } from "react";

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    this.productRef = React.createRef();
  }

  componentDidMount() {
    this.productRef.current.addEventListener("load", this.otherAttributes);
  }

  // Here we parse other data from that image object (uncomment to parse)
  otherAttributes = () => {
    //console.log(this.productRef.current.clientHeight);

    const height = this.productRef.current.clientHeight;
    const spans = Math.ceil(height / 200 + 1); // because row height is 200 px (grid-auto-rows: 200px;)

    this.setState({ spans });
  };

  // May add style to the JSX div ( style={{ gridRowEnd: `span ${this.state.spans}` }})
  render() {
    const { description, urls } = this.props.product;
    return (
      <div>
        <img ref={this.productRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ProductCard;
