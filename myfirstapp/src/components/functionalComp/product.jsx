import { useState } from "react";

// const Product = (props) => {
  //چون چیزی که به اینجا پراپ شده نام کانت با نام یک متغیر در اینجا ییکی است جلوی آن دو نقطه میگذاریم و یک نام دیگر به آن نسبت میدهیم که نامها تکراری نشوند
  const Product = ({productName,count:propCount,onDelete,id,imgUrl,children}) => {
  const [count, setCount] = useState(propCount);
  //   const [existance, setExistance] = useState(1);
  const existance = 1;

  // const imgUrl = "https:/picsum.photos/200";

  return (
    <div>
      {existance !== 0 ? (
        <>
          <span className="m-2 text-info">{productName}</span>
          {/* <span className="m-2 text-info">{props.productName}</span> */}
          <span className="m-2 badge bg-primary">
            {count === 0 ? "zero" : count}
            {/* {this.count !== 0 && this.count} */}
          </span>
          {/* نکته مهم : در رویداد ها مثلآن کلیک فراخوانی توابع به پرانتز نیازی نیست   */}
          <button
            onClick={() => {
              handleIncrement();
            }}
            // onClick={() => handleIncrement(count, setCount)}
            className="m-2 btn btn-sm btn-success"
          >
            +
          </button>
          <button
            onClick={() => {
              handleDecrement("55");
            }}
            className="m-2 btn btn-sm btn-warning"
          >
            -
          </button>
          <button onClick={handleDelete} className="m-2  btn btn-sm btn-danger">
            Delete
          </button>
          {/* <ul>
              {List.map((item,index)=><li key={index}>{item}</li>)}
          </ul> */}
          <img src={imgUrl} style={{ borderRadius: "80%",width:"10%" }} />
          {children}
        </>
      ) : (
        <h1>No product Found</h1>
      )}
    </div>
  );

  //توجه شود فانکشنها در درون خود پروداکت تعریف شده اند و بیرون آن تعریف نشده اند
  //در فانکشنال کامپوننت متدهارا باید حتما قبلش کلمه فانکشن گذاشت و از ارو فانکشن استفاده نکرد
  //خبری از استفاده از کلمه دیس در فانکشنال کامپوننت نیست
  //برای استفاده از استیت ها باید یوز استیت را در فانکشنال کامپوننت ایمپورت کرد
  //در کلاس کامپوننت فقط میشود یک استیت داشت اما در فانکشنال کامپوننت می توان چندین استیت تعیین کرد

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleDelete() {
    console.log("delete");
    onDelete(id);
  }

  function format() {
    if (count == 0) {
      return "zero";
    } else {
      return count;
    }
  }
};

//نکته مهم : اگر خواستیم فانکشن را بیرون پروداکت تعریف کنیم حتما باید کونت و ست کونت را به ورودی آن بدهیم
// function handleIncrement(count, setCount) {
//   setCount(count + 1);
// }
//و در بالا هم باید بصورت زیر بنویسیم
//   onclick = {()=>handleIncrement(count1,setCount)}

export default Product;
