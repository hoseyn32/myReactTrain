import React from "react";

class Navbar extends React.Component {
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
    let sum = 0;
    this.props.products.forEach((p) => {
      sum += p.count;
    });
    return sum;
  };
}

export default Navbar;
