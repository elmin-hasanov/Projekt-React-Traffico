import "./Head.css";
import backgroundImage1 from "../../assets/img/overlay.png";
import backgroundImage2 from "../../assets/img/BG.png";
import mobel from "../../assets/img/mobel.png";
import Group from "../../assets/img/Group.png";
import Logo from "../../assets/img/logo.png";
import Mond from "../../assets/img/Vector2.png";
import BtnPfleil from "../../assets/img/pfeil.svg";

import { CSSProperties } from "react";

const Head = () => {
  return (
    <div
      className="Head"
      style={
        {
          "--background1": `url(${backgroundImage1})`,
          "--background2": `url(${backgroundImage2})`,
        } as CSSProperties
      }
    >
      <nav className="nav">
        <div className="logo">
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
          <button>CONTACT US</button>
        </div>
      </nav>
      <div className="Hero">
        <h2>Your awesome</h2>
        <h2>traffic permit</h2>
        <h2>consultant.</h2>
        <button>
          GET STARTED <img className="BtnPfleil" src={BtnPfleil} />
        </button>
      </div>
      <img className="mobel" src={mobel} alt="mobel" />
      <img className="Group" src={Group} alt="Group" />
      <img className="Mond" src={Mond} alt="Mond" />
    </div>
  );
};

export default Head;
