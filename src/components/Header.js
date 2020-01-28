import React from 'react';
import '../App.scss';

function Header() {
  return (
    <div className="header">

      <h1>Irfan Uraizee</h1>

      <p>Cross platform-designer and web developer at <span className="break"><b>The Washington Post</b></span></p>

      <div className="contact">
        <a href="mailto:iuraizee@gmail.com">
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/IrfanUraizee">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/irfanuraizee">
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

export default Header;
