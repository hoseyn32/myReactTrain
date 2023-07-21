import { Component } from "react";

class Product extends Component {
  // count1 = 1;
  existance = 1;
  imgUrl='https:/picsum.photos/200'
  //اگر تابع اینجا تعریف شود دیگر لازم نیست به ورودی توابع آن را بدهیم و باید برای دسترسی به آن ریترین گذاشت
  state={
    count1:0
  };

  render() {
    const count = 1;
    // const List = ['a','b','c'];

    return (
      <>
        {this.existance !== 0 ? (
          <>
            <span className="m-2 text-info">Prodeuct Name</span>
            <span className="m-2 badge bg-primary">
              {this.state.count1 === 0 ? "zero" : this.state.count1}
              {/* {this.count1 !== 0 && this.count1} */}
            </span>
            {/* نکته مهم : در رویداد ها مثلآن کلیک فراخوانی توابع به پرانتز نیازی نیست   */}
            <button onClick={()=>{this.handleIncrement()}}  className="m-2 btn btn-sm btn-success">+</button>
            <button onClick={()=>{this.handleDecrement('55')}}  className="m-2 btn btn-sm btn-warning">-</button>
            <button onClick={this.handleDelete} className="m-2  btn btn-sm btn-danger">Delete</button>
            {/* <ul>
            {List.map((item,index)=><li key={index}>{item}</li>)}
        </ul> */}
            <img src={this.imgUrl} style={{borderRadius:'80%'}}/>
          </>
        ) : (
          <h1>No product Found</h1>
        )}
      </>
    );
  }

  handleIncrement=()=>{
    // console.log('increment',this);
    //متغیر را با روش زیر تعریف کنیم کار نمیکند
    // const counted = this.state.count1;
    const {count1 : counted} = this.state;
    this.setState({count1:counted + 1});
    console.log(this.state)
  };

  handleDecrement=(itemNumber)=>{
    console.log('decrement',itemNumber);
    const {count1 : counted} = this.state;
    this.setState({count1:counted - 1});
  };

  //در اینجا اگر تابع بصورت ارو فانکشن نباشد مقدار دیس آندیفایند میشود چون آن کلیک آن بصورت ارو فانکشن نوشته نشده است
  handleDelete=()=>{
    console.log('delete',this);
  };

  format() {
      if(this.state.count1==0){
          return 'zero';
      }else{
          return this.state.count1;
      }
    }
}

export default Product;
