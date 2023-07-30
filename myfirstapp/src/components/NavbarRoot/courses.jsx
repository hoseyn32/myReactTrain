import Navbar from "../NavbarRoot/navbar";
import Courses1 from "../NavbarRoot/courses1";
import Courses2 from "../NavbarRoot/courses2";
import { Outlet, Link, NavLink } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <Navbar />
      <h1>دوره های سایت</h1>
      <hr/>
      <NavLink
        to="/courses/courses1"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "black" };
        }}
      >
        <span style={{border:"1px solid black",borderRadius:"5px",padding:"5px",marginLeft:"10px",marginTop:"20px",textDecoration:"none"}}>دوره 1</span>
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return { color: isActive ? "red" : "black" };
        }}
        to="/courses/courses2"
      >
        <span style={{border:"1px solid black",borderRadius:"5px",padding:"5px",marginLeft:"10px",marginTop:"20px",textDecoration:"none"}}>دوره 2</span>
      </NavLink>

      <hr />
      <Outlet />
    </>
  );
};

export default Courses;
