import React from 'react';
import Topic from "./Topic";
import "./Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <p className='last__update'>Last updated on 1/31/2023. This website is maintained and updated by Michael Yang.</p>

      <div className="footer__links">

        <div className="footer__option">
          <Topic
            title="Github"
            relink="https://github.com/myang5128"
            blank='yes'
          />
        </div>
        <div className="footer__option">
          <Topic
            title="LinkedIn"
            relink="https://www.linkedin.com/in/michael-yang-9b46b6208/"
            blank='yes'
          />
        </div>
      </div>

    </div>
  )
}

export default Footer