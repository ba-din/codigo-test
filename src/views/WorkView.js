import React from 'react';
import Navbar from '../components/Navbar.js';
import Content from '../components/Content.js';

const WorkView = ({setSidebarOpen}) => {
  return (
    <div>
      <Navbar
        navButtons={[
          (
            <span className="nav_button" onClick={() => setSidebarOpen(true)}>
              Request a quote
            </span>
          )
        ]}
      />
      <Content />
    </div>

  )
}

export default WorkView;