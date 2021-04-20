import React from 'react';
import { Link } from 'react-router-dom';


const AppointmentHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
  
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a className="nav-link me-5 text-white active" aria-current="page" href="!#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-5" href="!#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-5" href="!#">Dental service</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-5" to="/dashboard">DashBoard</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link me-5" href="!#">Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-5" href="!#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-5" href="!#">Contact us</a>
              </li>
  
            </ul>
  
          </div>
        </div>
      </nav>
       
    );
};

export default AppointmentHeader;