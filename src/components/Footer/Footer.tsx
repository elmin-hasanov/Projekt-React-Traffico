import "./Footer.css";

import facebook from "../../assets/img/f.png";
import twitter from "../../assets/img/t.png";
import instagram from "../../assets/img/i.png";

const Footer = () => {
  return (
    <div className="Footer">
      <img
        className="mobilefooter"
        src="./public/img/trekmobilfooter.png"
        alt="mobel"
      />
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
          <button>GET STARTED ⟶</button>
        </div>
      </div>
      <nav className="footernav">
        <div className="footerlogo">
          <div>
            <img src="./public/img/logo.png" alt="Logo" />
          </div>
          <div></div>
          <h2>TRAFICO.</h2>
        </div>
        <div className="navlinks">
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
