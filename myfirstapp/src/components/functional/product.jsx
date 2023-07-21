import { useState } from "react";

const Product = () => {
  const [count1, setCount] = useState(0);
  //   const [existance, setExistance] = useState(1);
  const existance = 1;

  const imgUrl = "https:/picsum.photos/200";

  return (
    <>
      {existance !== 0 ? (
        <>
          <span className="m-2 text-info">Prodeuct Name</span>
          <span className="m-2 badge bg-primary">
            {count1 === 0 ? "zero" : count1}
            {/* {this.count1 !== 0 && this.count1} */}
          </span>
          {/* نکته مهم : در رویداد ها مثلآن کلیک فراخوانی توابع به پرانتز نیازی نیست   */}
          <button
            onClick={() => {
              handleIncrement();
            }}
            // onClick={() => handleIncrement(count1, setCount)}
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
          <img src={imgUrl} style={{ borderRadius: "80%" }} />
        </>
      ) : (
        <h1>No product Found</h1>
      )}
    </>
  );

  //توجه شود فانکشنها در درون خود پروداکت تعریف شده اند و بیرون آن تعریف نشده اند
  //در فانکشنال کامپوننت متدهارا باید حتما قبلش کلمه فانکشن گذاشت و از ارو فانکشن استفاده نکرد
  //خبری از استفاده از کلمه دیس در فانکشنال کامپوننت نیست
  //برای استفاده از استیت ها باید یوز استیت را در فانکشنال کامپوننت ایمپورت کرد
  //در کلاس کامپوننت فقط میشود یک استیت داشت اما در فانکشنال کامپوننت می توان چندین استیت تعیین کرد

  function handleIncrement() {
    setCount(count1 + 1);
  }

  function handleDecrement() {
    setCount(count1 - 1);
  }

  function handleDelete() {
    console.log("delete");
  }

  function format() {
    if (count1 == 0) {
      return "zero";
    } else {
      return count1;
    }
  }
};

//نکته مهم : اگر خواستیم فانکشن را بیرون پروداکت تعریف کنیم حتما باید کونت و ست کونت را به ورودی آن بدهیم
// function handleIncrement(count1, setCount) {
//   setCount(count1 + 1);
// }
//و در بالا هم باید بصورت زیر بنویسیم
//   onclick = {()=>handleIncrement(count1,setCount)}

export default Product;
