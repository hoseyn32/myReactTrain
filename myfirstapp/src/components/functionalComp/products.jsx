import Product from "./product";

const Products = (props) => {
  // const [products, setProducts] = useState([
  //   {
  //     id: 1,
  //     count: 2,
  //     productName: "laptop",
  //     imgUrl: "https:/picsum.photos/200",
  //   },
  //   {
  //     id: 2,
  //     count: 1,
  //     productName: "phone",
  //     imgUrl: "https:/picsum.photos/300",
  //   },
  //   {
  //     id: 3,
  //     count: 4,
  //     productName: "airpods",
  //     imgUrl: "https:/picsum.photos/400",
  //   },
  // ]);

  return (
    <>
      <button
        onClick={props.onReset}
        style={{ margin: "20px" }}
        className="btn btn-danger"
      >
        Reset Delete
      </button>
      {props.products.map((p, index) => (
        <Product
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          onDelete={props.onDelete}
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
