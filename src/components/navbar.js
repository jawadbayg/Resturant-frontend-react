import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand custom-font" href="/">Big Bite</a> {/* Added class here */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="mx-auto">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/">Home <span className="sr-only"></span></a>
            <a className="nav-item nav-link" href="/">About Us</a>
            <a className="nav-item nav-link" href="/">Services</a>
            <a className="nav-item nav-link" href="/">Reservations</a>
            <a className="nav-item nav-link" href="/">Contact</a>
          </div>
        </div>
        <div className="navbar-button">
          <button id="navbtn" className="btn btn-danger">Register Now</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
