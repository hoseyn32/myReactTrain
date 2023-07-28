import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//کلاس کامپوننت
// import Products from "./components/classComp/products";

//فانکشن کامپوننت
// import Products from "./components/functionalComp/products";

//App
// import App from "./components/classComp/appClass";
import App from "./components/functionalComp/appFunc";

// import {walk} from "./importexport";

// walk();

// const element = <h1>helloWorld</h1>;

// ReactDOM.render(<ClassComponent/>,document.getElementById('root'));
// ReactDOM.render(<FunctionComponent/>,document.getElementById('root'));
// ReactDOM.render(<Products/>,document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById("root"));
