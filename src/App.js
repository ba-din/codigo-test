import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes.js';

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
  return (
    <div className="App">
      <Router>
        {renderRoutes(routes)}
      </Router>
    </div>
  );
}
export default App;