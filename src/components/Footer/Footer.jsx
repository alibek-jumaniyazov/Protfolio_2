import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="footer_container">
        <p className="footer__title">Contact</p>
        <span className="footer__desc">
          Seasoned Full Stack Software Engineer with over 8 years of hands-on
          experience in designing and implementing robust, scalable, and
          innovative web solutions. Adept at leveraging a comprehensive skill
          set encompassing front-end and back-end technologies
        </span>
        <p className="footerInfo__email">
          <i className="fa-regular fa-envelope"></i>
          abmcodehub@gmail.com
        </p>
        <div className="footer__icons">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
  );
}
