import React, { useEffect, useState } from 'react';
import '../assets/styles/sidebar.scss';
import CTAForm from './CTAForm';

const Sidebar = ({ show, setShow }) => {
  const [styleClasses, setStyleClasses] = useState('')
  useEffect(() => {
    if (show) {
      document.getElementById('App').classList.add('sidebar-exit')
      setStyleClasses('sidebar_wrapper onboard')
    } else {

    }
  }, [show])

  const onHandleSideBarClose = () => {
    document.getElementById('App').classList.remove('sidebar-exit')
    setStyleClasses('sidebar_wrapper exit')
    setShow(false)
  }

  return (
    <div className={styleClasses} id='slide'>
      <button onClick={() => onHandleSideBarClose()}>CLose</button>
      <CTAForm />
    </div>
  )
}

export default Sidebar;