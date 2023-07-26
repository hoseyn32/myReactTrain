import { Component } from "react";

class Product extends Component {
  // count1 = 1;
  existance = 1;
  imgUrl='https:/picsum.photos/200'
  //اگر تابع اینجا تعریف شود دیگر لازم نیست به ورودی توابع آن را بدهیم و باید برای دسترسی به آن ریترین گذاشت
  state={
    count:this.props.count,
    imgUrl:this.props.imgUrl
  };

  render() {
    const count = 1;
    // const List = ['a','b','c'];
    const {productName} = this.props;

    return (
      <div>
        {this.existance !== 0 ? (
          <>
            <span className="m-2 text-info">{productName}</span>
            <span className="m-2 badge bg-primary">
              {/* {this.format()} */}
              {this.state.count === 0 ? "zero" : this.state.count}  
              {/* {this.count !== 0 && this.count} */}
            </span>
            {/* نکته مهم : در رویداد ها مثلآن کلیک فراخوانی توابع به پرانتز نیازی نیست   */}
            <button onClick={()=>{this.handleIncrement()}}  className="m-2 btn btn-sm btn-success">+</button>
            <button onClick={()=>{this.handleDecrement('55')}}  className="m-2 btn btn-sm btn-warning">-</button>
            <button onClick={this.handleDelete} className="m-2  btn btn-sm btn-danger">Delete</button>
            {/* <ul>
            {List.map((item,index)=><li key={index}>{item}</li>)}
        </ul> */}
            <img src={this.state.imgUrl} style={{borderRadius:'80%',width:'10%'}}/>
            {this.props.children}
          </>
        ) : (
          <h1>No product Found</h1>
        )}
      </div>
    );
  }

  handleIncrement=()=>{
    // console.log('increment',this);
    //متغیر را با روش زیر تعریف کنیم کار نمیکند
    // const counted = this.state.count;
    const {count : counted} = this.state;
    this.setState({count:counted + 1});
    console.log(this.state)
  };

  handleDecrement=(itemNumber)=>{
    console.log('decrement',itemNumber);
    const {count : counted} = this.state;
    this.setState({count:counted - 1});
  };

  //در اینجا اگر تابع بصورت ارو فانکشن نباشد مقدار دیس آندیفایند میشود چون آن کلیک آن بصورت ارو فانکشن نوشته نشده است
  handleDelete=()=>{
    this.props.onDelete(this.props.id);
  };

  format() {
      if(this.state.count==0){
          return 'zero';
      }else{
          return this.state.count;
      }
    }
}

export default Product;
