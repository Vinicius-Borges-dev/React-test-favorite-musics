import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>
            <img
              src="https://placehold.co/35"
              alt=""
              className="d-inline-block align-text-top"
            />
            Fav Musics
          </Link>
          <button type="button" className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#MenuNavbar" aria-controls="MenuNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="MenuNavbar" aria-labelledby="MenuNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="MenuNavbarLabel">Menu</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/watch">Watch</Link>
          </li>
        </ul>
      </div>
    </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
