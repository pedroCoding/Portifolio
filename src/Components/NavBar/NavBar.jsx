import React from "react";

export default function Navbar({ setOffcanvasVisible, offcanvasVisible }) {
  return (
    <nav className="navbar navbar-expand-lg top-nav-adjust navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOffcanvasVisible(!offcanvasVisible)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}