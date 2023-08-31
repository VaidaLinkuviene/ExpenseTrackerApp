import React, { useContext } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { ThemeContext } from "../themeProvider/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`footer ${theme}`}>
      <a href="https://www.instagram.com/accenturebaltics/">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://twitter.com/">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.facebook.com/AccentureBaltics">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </div>
  );
};

export default Footer;
