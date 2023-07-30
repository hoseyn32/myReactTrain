import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Home
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/users" className="nav-link active" aria-current="page" href="/users">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/courses" className="nav-link" href="/register">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link" href="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link" href="/register">
                  Register
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
