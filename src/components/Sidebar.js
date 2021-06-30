import React, { useEffect, useState } from 'react';
import '../assets/styles/sidebar.scss';
import CTAForm from './CTAForm';

let timer = null
const Sidebar = ({ show, setShow, isLetsChat }) => {
  const [styleClasses, setStyleClasses] = useState('sidebar_wrapper')
  useEffect(() => {
    if (show) {
      if (timer) clearInterval(timer)
      document.getElementById('App').classList.add('sidebar-exit')
      setStyleClasses('sidebar_wrapper onboard')
    }
  }, [show])

  const onHandleSideBarClose = () => {
    document.getElementById('App').classList.remove('sidebar-exit')
    setStyleClasses('sidebar_wrapper exit')

    timer = setInterval(() => {
      setShow(false)
    }, 1000);
  }

  return (
    <>
      {
        show && (
          <div className={styleClasses}>
            <div className="sidebar-close" onClick={() => onHandleSideBarClose()}></div>
            <CTAForm 
              isLetsChat={isLetsChat}
            />
          </div>
        )
      }
    </>
  )
}

export default Sidebar;