import { Component } from "react";

class Product extends Component {
  count1 = 1;
  existance = 1;

  //اگر تابع اینجا تعریف شود دیگر لازم نیست به ورودی توابع آن را بدهیم و باید برای دسترسی به آن ریترین گذاشت

  render() {
    const count = 1;
    // const List = ['a','b','c'];

    return (
      <>
        {this.existance !== 0 ? (
          <>
            <span className="m-2 text-info">Prodeuct Name</span>
            <span className="m-2 badge bg-primary">
              {this.count1 === 0 ? "zero" : this.count1}
              {/* {this.count1 !== 0 && this.count1} */}
            </span>
            <button className="m-2 btn btn-sm btn-success">+</button>
            <button className="m-2 btn btn-sm btn-warning">-</button>
            <button className="m-2  btn btn-sm btn-danger">Delete</button>
            {/* <ul>
            {List.map((item,index)=><li key={index}>{item}</li>)}
        </ul> */}
        
          </>
        ) : (
          <h1>No product Found</h1>
        )}
      </>
    );
  }

    format() {

      if(this.count1==0){
          return 'zero';
      }else{
          return this.count1;
      }
    }
}

export default Product;
