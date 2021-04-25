import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    // eslint-disable-next-line
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" exact to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" exact to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" exact to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
