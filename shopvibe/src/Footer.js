import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <h4 className="footer__text">Created by</h4>
        <p className="footer__text">Student: Dinu Mira</p>
        <p className="footer__text">Cohort: C19</p>
      </div>
      <div className="footer__center">
        <p className="footer__text"><strong>&copy; 2023 Project for Holberton School</strong></p>
        <p className="footer__text"><strong>All rights reserved</strong></p>
      </div>
      <div className="footer__right">
          <h4 className="footer__text">Contacts:</h4>
          <div className="footer__contact-list">
            <strong className="footer__contact-item">Email:</strong>
            <p>clementine.dubois@holbertonschool.com</p>
            <strong className="footer__contact-item">Phone:</strong>
            <p>01 76 35 12 43</p>
            <strong className="footer__contact-item">Address:</strong>
            <p>22 Terrasse Bellini, Esplanade de la Défense, 92800 Puteaux</p>
            <strong className="footer__contact-item">Website:</strong>
            <p><a href="https://www.holbertonschool.fr" target="_blank" rel="noopener noreferrer">www.holbertonschool.fr</a></p>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
