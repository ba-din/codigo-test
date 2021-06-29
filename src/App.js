import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes.js';
import Sidebar from "./components/Sidebar";

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

  return (
    <>
      <div className="App" id="App">
        <Router>
          {renderRoutes(routes, {sidebarOpen, setSidebarOpen})}
        </Router>
      </div>
      <Sidebar
        show={sidebarOpen}
        setShow={setSidebarOpen}
      />
    </>
  );
}
export default App;