import "./Footer.css";

import facebook from "../../assets/img/f.png";
import twitter from "../../assets/img/t.png";
import instagram from "../../assets/img/i.png";
import footer from "../../assets/img/Footer.png";
import Logo from "../../assets/img/logo.png";
import mobelfooter from "../../assets/img/trekmobilfooter.png";
import BtnPfleil from "../../assets/img/pfeil.svg";
import Stone from "../../assets/img/stone.png";

import { CSSProperties } from "react";

const Footer = () => {
  return (
    <div
      className="Footer"
      style={
        {
          "--Footer": `url(${footer})`,
        } as CSSProperties
      }
    >
      <img className="mobilefooter" src={mobelfooter} alt="mobel" />
      <img className="stone" src={Stone} alt="stone" />
      <div className="FooterText">
        <div>
          <p></p>
        </div>
        <div>
          <p>
            We provide traffic management consultants so you get started
            quickly, contact us for a quote today!
          </p>
        </div>
        <div>
          <button>
            GET STARTED <img className="BtnPfleil" src={BtnPfleil} />
          </button>{" "}
        </div>
      </div>
      <nav className="footernav">
        <div className="footerlogo">
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <div></div>
          <h2>TRAFICO.</h2>
        </div>
        <div>
          <a href="#">ABOUT</a>
          <a href="#">HOW TO</a>
          <a href="#">FAQS</a>
        </div>
      </nav>
      <div className="footerEnd">
        <div>
          <p>Copyright @ 2019</p>
        </div>
        <div className="social">
          <img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
          <img src={twitter} alt="Twitter" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
