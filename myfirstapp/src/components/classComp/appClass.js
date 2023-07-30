import { Component } from "react";
import Products from "./products";
import Navbar from "./Navbar";
import ProductContext from "../../context/products";
// import Products from "./components/functionalComp/products";
// import Navbar from "./components/functionalComp/Navbar";

class App extends Component {

  constructor(props){
    //خط زیر الزامی است
    //ست استیت را نمی توان در اینجا صدا زد چون در زمانی میتوان از آن استفاده کرد که کامپوننت رندر شده باشد
    super(props);
    console.log('App - constructor');
  }

  componentDidMount(){
    console.log('App - didMount');
  }



  state = {
    products: [
      {
        id: 1,
        count: 2,
        productName: "laptop",
        imgUrl: "https:/picsum.photos/200",
      },
      {
        id: 2,
        count: 1,
        productName: "phone",
        imgUrl: "https:/picsum.photos/300",
      },
      {
        id: 3,
        count: 4,
        productName: "airpods",
        imgUrl: "https:/picsum.photos/100",
      },
    ],
  };

  render() {
    //اگر این کامپوننت رندر شود تمام کامپوننتهای زیر مجموعه آن هم رندر میشوند
    return (
      <>
        <ProductContext.Provider
         value={{
          products:this.state.products,
          onDelete:this.handleDelete,
          onIncrement:this.handleIncrement,
          onDecrement:this.handleDecrement,
          onReset:this.handleReset
         }}
        >
          <Navbar />
          <Products />
        </ProductContext.Provider>
      </>
    );
  }

  handleIncrement = (productId) => {
    console.log(productId);
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count += 1;
    this.setState({ products: newProducts });
  };

  handleDecrement = (productId) => {
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count -= 1;
    this.setState({ products: newProducts });
  };

  handleDelete = (productId) => {
    console.log(productId);
    const newProducts = this.state.products.filter((p) => p.id !== productId);
    console.log(newProducts);
    this.setState({ products: newProducts });
  };

  handleReset = () => {
    const newCount = this.state.products.map((p) => {
      p.count = 0;
      return p;
    });
    this.setState({ products: newCount });
  };
}

export default App;
