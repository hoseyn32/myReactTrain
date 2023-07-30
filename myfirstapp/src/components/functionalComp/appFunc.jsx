import Navbar from "../NavbarRoot/navbar";
import Users from "../functionalComp/users";

const App = () =>{
  return(
    <>
      <Navbar/>
      <div className="container">
      <Users/>       
      </div>
    </>
  )
}

export default App ;