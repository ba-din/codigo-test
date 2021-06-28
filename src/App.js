import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import './App.scss';
const App = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('scroll')

      setTimeout(() => {
        body.classList.remove('scroll')
      }, 3000);
    })
  })
  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}
export default App;