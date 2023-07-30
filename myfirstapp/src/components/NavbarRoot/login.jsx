import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";


const Login = () =>{

    const navigate = useNavigate();

    return(
        <> 
            <Navbar/>
            <h1>Login Page</h1>
            <button className="btn btn-primary" onClick={()=>{
                navigate('/dashbord',{state:"mammd"});
            }} >Login</button>
        </>
    )
}

export default Login ;