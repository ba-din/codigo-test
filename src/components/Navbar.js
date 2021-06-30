//Navbar.js
import React from 'react';
import '../assets/styles/navbar.scss';
import Logo from '../assets/images/logo-codigo-red.svg';
import HumberGerMenu from './humbergerMenu';
const Navbar = ({ navButtons }) => {
  return (
    <header className="navBar">
      <div className="navbar_wrapper">
        <div className="navBar__logoWrapper">
          <img
            src={Logo}
            alt="catigo"
          />
        </div>
        <div className="navigation md-hide sm-hide">
          <a href="/" className="nav_link active">
            <p>
              Work
            </p>
          </a>
          <a href="/" className="nav_link">
            <p>
              Solutions
            </p>

          </a>

          <a href="/" className="nav_link">
            <p>
              Services
            </p>
          </a>

          <a href="/" className="nav_link">
            <p>About Us</p>
          </a>

          <a href="/" className="nav_link">
            <p>Blog</p>
          </a>

          {
            navButtons && navButtons.map((button) => {
              return button
            })
          }
        </div>

        <HumberGerMenu className="lg-hide" />
      </div>
    </header>
  )
};
export default Navbar;