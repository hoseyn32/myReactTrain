import Navbar from "./navbar";
import { useLocation } from "react-router-dom";

const Dashbord = () =>{
    const location = useLocation();
    return(
        <>
            <Navbar/>
            <h1>dashbord</h1>
            <hr/>
            <h6>hi {location.state} </h6>
        </>
    )
};

export default Dashbord ;