//Navbar.js
import React from 'react';
import '../assets/styles/navbar.scss';
import Logo from '../assets/images/logo-codigo-red.svg';
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
        <div className="navigation">
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
      </div>
    </header>
  )
};
export default Navbar;