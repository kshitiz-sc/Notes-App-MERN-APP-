import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const auth = localStorage.getItem("currentuser");
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.clear();
     navigate('/');
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Notify!
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link hover" aria-current="page" to="/yournotes">
                  Your Notes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link hover" aria-current="page" to="/addnote">
                  Add note
                </Link>
              </li>
            </ul>
  
            {auth === null ? (
              <>
              <Link to="/">
                <button className="btn btn-outline-success">Sign up</button>
              </Link>
              <Link to="/login">
                <button style={{marginLeft:'3px'}} className="btn btn-outline-success">Log in</button>
              </Link>
              </>
            ) : (
              <Link to="/">
                <button onClick={logout} className="btn btn-outline-success">Log Out</button>
              </Link>
            )}
            {auth != null ? <span className="m-2">Welcome {JSON.parse(localStorage.getItem('currentuser')).Name} !</span>: ""}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
