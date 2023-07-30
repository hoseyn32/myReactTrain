import Navbar from "./Navbar";
import Products from "./products";
import { useState , useEffect} from "react";
import ProductsContext from "../../context/products";

const App = () => {
  const [products, setProducts] = useState([
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
      imgUrl: "https:/picsum.photos/400",
    },
  ]);

  //mount - update
  useEffect(()=>{
    console.log('mount and update')
  });

   //mount
   useEffect(()=>{
    console.log('mount')
  },[]);

  //unmount
  //باید در کامپوننتی که از بین میرود نوشته شود تا کار کند
  useEffect(()=>{
    return ()=>{
      console.log('unmount')
    }
  })


  return (
    <>
      <ProductsContext.Provider
      value={{
      products:products,
      onDelete:handleDelete,
      onIncrement:handleIncrement,
      onDecrement:handleDecrement,
      onReset:handleReset
      }}
      >
      
      <Navbar/>
      <Products/>

      </ProductsContext.Provider>
    </>
  );

  function handleIncrement(productId) {
    console.log(productId);
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count += 1;
    setProducts(newProducts);
  }

  function handleDecrement(productId) {
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count -= 1;
    setProducts(newProducts);
  }

  function handleDelete(productId) {
    console.log(productId);
    const newProducts = products.filter((p) => p.id !== productId);
    console.log(newProducts);
    setProducts(newProducts);
  }

  function handleReset() {
    const newCount = products.map((p) => {
      p.count = 0;
      return p;
    });
    setProducts(newCount);
  }
};

export default App;
