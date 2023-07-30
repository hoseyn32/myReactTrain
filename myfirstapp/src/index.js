import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/NavbarRoot/home";
import Login from "./components/NavbarRoot/login";
import Register from "./components/NavbarRoot/register";
import Courses from "./components/NavbarRoot/courses";
import Courses1 from "./components/NavbarRoot/courses1";
import Courses2 from "./components/NavbarRoot/courses2";
import ContentRoot from "./components/NavbarRoot/contentForRoot";
import Dashbord from "./components/NavbarRoot/dashboard";
import { Route, BrowserRouter as Router , Routes , Navigate } from "react-router-dom";

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
ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Navigate replace  to="/"/>}/>
            <Route path="/users" element={<App/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashbord" element={<Dashbord/>}/>
            <Route path="/courses" element={<Courses/>}>
                <Route path="courses1" element={<Courses1/>}>
                     <Route path=":id" element={<ContentRoot/>}/> 
                </Route>
                <Route path="courses2" element={<Courses2/>}/>
            </Route>
        </Routes>
    </Router>, document.getElementById("root"));

    //نکته مهم : وقتی از تبهای تو در تو استفاده میکنید حتما باید از اوت لت در کامپوننت پدر استفاده کنیم
