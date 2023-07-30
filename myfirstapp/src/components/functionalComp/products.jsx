import Product from "./product";
import { useContext } from "react";
import ProductsContext from "../../context/products";

const Products = (props) => {

  const productsContext = useContext(ProductsContext);

  console.log("aaaaaaaaa",productsContext);

  return (
    <>
      <button
        onClick={productsContext.onReset}
        style={{ margin: "20px" }}
        className="btn btn-danger"
      >
        Reset Delete
      </button>
      {productsContext.products.map((p, index) => (
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

  // function handleIncrement(productId) {
  //   console.log(productId);
  //   const newProducts = [...props.products];
  //   const index = newProducts.findIndex((p) => p.id === productId);
  //   newProducts[index].count += 1;
  //   setProducts(newProducts);
  // }

  // function handleDecrement(productId) {
  //   const newProducts = [...props.products];
  //   const index = newProducts.findIndex((p) => p.id === productId);
  //   newProducts[index].count -= 1;
  //   setProducts(newProducts);
  // }

  // function handleDelete(productId) {
  //   console.log(productId);
  //   const newProducts = props.products.filter((p) => p.id !== productId);
  //   console.log(newProducts);
  //   setProducts(newProducts);
  // }

  // function handleReset() {
  //   const newCount = props.products.map((p) => {
  //     p.count = 0;
  //     return p;
  //   });
  //   setProducts(newCount);
  // }
};

export default Products;
