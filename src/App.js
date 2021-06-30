import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes.js';
import Sidebar from "./components/Sidebar";
import Navbar from './components/Navbar.js';
import Footer from './components/Footer';

import './App.scss';
const App = () => {
  var timer = null;

  const onScrollHandler = () => {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('scroll')
    if (timer !== null) {
      clearTimeout(timer);
      timer = null
    }
    timer = setTimeout(() => {
      body.classList.remove('scroll')
    }, 1500);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler)
  })
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLetsChat, setIsLetsChat] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <div className="App" id="App">
        <div >
          <Navbar
            navButtons={[
              (
                <span key='request-a-quote' className="nav_button" onClick={() => setSidebarOpen(true)}>
                  Request a quote
                </span>
              )
            ]}
          />
          <Router>
            {renderRoutes(routes)}
          </Router>
          <Footer setSidebarOpen={setSidebarOpen} setIsLetsChat={setIsLetsChat}/>
        </div>
      </div>
      <div className="sidebar__wrapper">
        <Sidebar
          show={sidebarOpen}
          setShow={setSidebarOpen}
          style={{ position: 'absolute' }}
          isLetsChat={isLetsChat}
        />
      </div>
    </div>
  );
}
export default App;