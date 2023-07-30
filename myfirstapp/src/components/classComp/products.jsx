import React from "react";
import Product from "./product";
import ProductContext from "../../context/products";

class Products extends React.Component {
  static contextType = ProductContext;
  // state = {
  //   products: [
  //     {
  //       id: 1,
  //       count: 2,
  //       productName: "laptop",
  //       imgUrl: "https:/picsum.photos/200",
  //     },
  //     {
  //       id: 2,
  //       count: 1,
  //       productName: "phone",
  //       imgUrl: "https:/picsum.photos/300",
  //     },
  //     {
  //       id: 3,
  //       count: 4,
  //       productName: "airpods",
  //       imgUrl: "https:/picsum.photos/100",
  //     },
  //   ],
  // };
  render() {
    return (
      <>
        <button
          onClick={this.context.onReset}
          style={{ margin: "20px" }}
          className="btn btn-danger"
        >
          Reset Delete
        </button>
        {/* <Product productName="laptop"/>
            <Product productName="tablet"/>
            <Product productName="mobile "/> */}
        {this.context.products.map((p, index) => (
          <Product
            id={p.id}
            key={index}
            productName={p.productName}
            count={p.count}
            imgUrl={p.imgUrl}
          >
            <p>قیمت عالی و ارزان</p>
          </Product>
        ))}
      </>
    );
  }
}

export default Products;
