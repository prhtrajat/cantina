import React from "react";
import Modal from "./Modal";

const Navbar = () =>{
 return(
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><i className="bi bi-egg-fill text-danger fs-2"></i> <span className="fw-bold fs-2">Cantina</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav fw-bold m-auto mb-2 mb-lg-0">
        <li className="nav-item px-3">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="/">Food</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="/">Contact</a>
        </li>
      </ul>
      <span className="navbar-text px-5">
        <Modal />
        
        <button className="btn btn-outline-success"><i className="bi bi-person-fill-add"></i> Sign Up</button>
      </span>

      
    </div>
  </div>
</nav>
 )
}

export default Navbar;