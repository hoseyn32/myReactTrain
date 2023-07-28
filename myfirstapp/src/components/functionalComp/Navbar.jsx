const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          تعداد محصولات : {calculatedSum()}
        </a>
      </div>
    </nav>
  );

  function calculatedSum() {
    let sum = 0;
    props.products.forEach((p) => {
      sum += p.count;
    });
    return sum;
  }
};

export default Navbar;
