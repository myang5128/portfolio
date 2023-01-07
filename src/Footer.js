import React from 'react';
import Topic from "./Topic";
import "./Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <p className='last__update'>Last updated on 1/7/2023. This website is maintained and updated by Michael Yang.</p>

      <div className="footer__links">

        <div className="footer__option">
          <Topic
            title="Github"
            relink="https://github.com/myang5128"
          />
        </div>
        <div className="footer__option">
          <Topic
            title="Instagram"
            relink="https://www.instagram.com/_notmikey_/"
          />
        </div>
        <div className="footer__option">
          <Topic
            title="LinkedIn"
            relink="https://www.linkedin.com/in/michael-yang-9b46b6208/"
          />
        </div>
        <div className="footer_option">
          <Topic
            title="Handshake"
            relink="https://vassar.joinhandshake.com/stu/users/27267917"
          />
        </div>
      </div>

    </div>
  )
}

export default Footer