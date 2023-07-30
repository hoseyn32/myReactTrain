import React from "react";
import ProductContext from "../../context/products";

class Navbar extends React.Component {
  static contextType = ProductContext;
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            navbar {this.calculatedSum()}
          </a>
        </div>
      </nav>
    );
  }

  calculatedSum = () => {
    console.log(this.context)
    let sum = 0;
    this.context.products.forEach((p) => {
      sum += p.count;
    });
    return sum;
  };
}

export default Navbar;
