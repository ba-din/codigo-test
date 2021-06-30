import React, { useState } from 'react';
import '../assets/styles/humbergerMenu.scss';

const HumberGerMenu = ({ className }) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <div className={`${className}`}>
        {/* humberger menu */}
        <input id="humbergerMenu" type="checkbox" onClick={() => setShowMenu(!showMenu)} />
        <label className="hamburgerLabel" htmlFor="humbergerMenu">
          <div className="top"></div>
          <div className="meat"></div>
          <div className="bottom"></div>
        </label>
        {/* TODO: menu */}
        {
          false && (
            <div className="AnimNavBarItems--exit AnimNavBarItems--onboard navBar__itemWrapper">
              <a href="/" className="is--inView navBar__item active">
                <p className="navBar__pTag">Work</p>
              </a>
              <a href="/" className="is--inView navBar__item ">
                <p className="navBar__pTag">Solutions</p>
              </a>
              <a href="/" className="is--inView navBar__item ">
                <p className="navBar__pTag">Services</p>
              </a>
              <a href="/" className="is--inView navBar__item ">
                <p className="navBar__pTag">About us</p>
              </a>
              <a href="/" className="is--inView navBar__item ">
                <p className="navBar__pTag">Blog</p>
              </a>
              <span className="navBar__btnQuote btn">
                <p className="navBar__pTag">Request a quote</p>
              </span>
              <a className="navBar__item navBar__item--mobileOnly active" aria-current="true" data-text="Blog" href="/">
                <p className="navBar__pTag">Let's chat</p>
              </a>
            </div>
          )
        }
      </div>
    </>
  )
}

export default HumberGerMenu;