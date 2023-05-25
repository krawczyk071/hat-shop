import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__box">
        <div className="footer__logo">
          <div className="navbar__logo">
            <span>BigHead</span>
          </div>
        </div>

        <div className="footer__stats">
          <div className="footer__stat">
            <h2>456</h2>
            <p>hats on SALE now</p>
          </div>
          <div className="footer__stat">
            <h2>1456</h2>
            <p>baseball cap models</p>
          </div>
          <div className="footer__stat">
            <h2>NBA NFL NHL</h2>
            <p>licensed leagues</p>
          </div>
        </div>
        <p className="footer__text">Szymon Krawczyk © 2023</p>
        <p className="footer__text">Privacy Policy | Refund Policy</p>
      </div>
    </div>
  );
};

export default Footer;
