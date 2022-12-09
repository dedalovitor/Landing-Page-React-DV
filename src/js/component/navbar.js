import React from "react";

//create navbar
const Navbar = () => {
  return (
    <nav className="navbar-dark navbar-expand-lg bg-dark p-2">
      <div className="container-fluid d-flex align-items-center">
        <a className="navbar-brand fs-5 fw-semibold mx-5" href="#">Start Booststrap</a>
        <div className="container-fluid d-flex justify-content-end">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active mx-3" aria-current="page" href="#">Home</a>
            <a className="nav-link mx-3" href="#">About</a>
            <a className="nav-link mx-3" href="#">Services</a>
            <a className="nav-link" href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;