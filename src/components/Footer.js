import React from 'react';
import '../assets/styles/footer.scss';

const Footer = ({setSidebarOpen, setIsLetsChat }) => {
  const onHandleLetsChat = () => {
    setSidebarOpen(true)
    setIsLetsChat(true)
  }
  return (
    <div className="footer">
      <span className="extraBold--36 footer__header">Let’s have a chat</span>

      <div className="footer_trust_wrapper clearfix" onClick={() => onHandleLetsChat()}>
        <div className="trusts__itemWrapper">
          <div className="trusts__itemWrapper--centraliser">
            <span className="extraBold--26 trusts__header w--arrow">
              Build
            </span>
            <div className="body--14">
              Help you build something
            </div>
          </div>
        </div>

        <div className="trusts__itemWrapper" onClick={() => onHandleLetsChat()}>
          <div className="trusts__itemWrapper--centraliser">
            <span className="extraBold--26 trusts__header w--arrow">
              Co-incubate
            </span>
            <div className="body--14">
              Co-incubate an idea together
            </div>
          </div>
        </div>

        <div className="trusts__itemWrapper" onClick={() => onHandleLetsChat()}>
          <div className="trusts__itemWrapper--centraliser">
            <span className="extraBold--26 trusts__header w--arrow">
              Customise
            </span>
            <div className="body--14">
              Customise a solution for your business
            </div>
          </div>
        </div>

        <div className="trusts__itemWrapper">
          <div className="trusts__itemWrapper--centraliser">
            <span className="extraBold--26 trusts__header w--arrow">
              Organise
            </span>
            <div>
              Organise learning sessions with us
            </div>
          </div>
        </div>
      </div>

      <div className="footer_contactInfo">
        <div className="footer_social">
          <a href="https://www.facebook.com/codigo.co/" target="_blank" className="social__item" rel="noreferrer">
            <img alt="codigo-fb" src="https://www.codigo.co/img/icons/social-facebook.svg" width="12" height="22" />
          </a>

          <a href="https://twitter.com/CodigoApps" target="_blank" className="social__item" rel="noreferrer">
            <img alt="codigo-twitter" src="https://www.codigo.co/img/icons/social-twitter.svg" width="23" height="18" />
          </a>

          <a href="https://www.instagram.com/hellocodigo/" target="_blank" className="social__item" rel="noreferrer">
            <img alt="codigo-ig" src="https://www.codigo.co/img/icons/social-instagram.svg" width="21" height="19" />
          </a>

          <a href="https://www.linkedin.com/company/codigo-pte-ltd" target="_blank" className="social__item" rel="noreferrer">
            <img alt="codigo-linkendin" src="https://www.codigo.co/img/icons/social-linkedIn.svg" width="20" height="20" />
          </a>
        </div>
        <div className="footer_contact">

        </div>
        <span>Copyright © Codigo - Mobile App Developer Singapore</span>
        <span>+65 6455 9790 • 26 Sin Ming Lane, Midview City #07-115 Singapore 573971</span>
      </div>
    </div>
  )
}

export default Footer;