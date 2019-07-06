import React from "react"
import { FaFacebook, FaInstagram, FaPhoneSquare } from "react-icons/fa"

export default function SocialLinks({ phoneAnimation }) {
  return (
    <div className="row header-social">
      <ul className="d-none d-md-flex header-social">
        <li className="header-social-item">
          <a href="tel:+359883917777">
            <FaPhoneSquare
              className={
                phoneAnimation
                  ? "menu-icon menu-icon-phone-animation"
                  : "menu-icon"
              }
            />{" "}
            0883 917777
          </a>
        </li>
        <li className="header-social-item">
          <a
            href="https://www.facebook.com/purelasebulgaria/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebook className="menu-icon" />
          </a>
        </li>
        <li className="header-social-item">
          <a
            href="https://www.instagram.com/purelase.bulgaria/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram className="menu-icon" />
          </a>
        </li>
      </ul>
    </div>
  )
}
