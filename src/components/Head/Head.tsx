import "./Head.css";

import mobel from "../../assets/img/mobel.png";
import Group from "../../assets/img/Group.png";

const Head = () => {
  return (
    <div className="Head">
      <nav className="nav">
        <div className="logo">
          <div>
            <img src="/img/logo.png" alt="Logo" />
          </div>
          <div></div>
          <h2>TRAFICO.</h2>
        </div>
        <div className="navlinks">
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
        <button>GET STARTED ⟶</button>
      </div>
      <img className="mobel" src={mobel} alt="mobel" />
      <img className="Group" src={Group} alt="Group" />
    </div>
  );
};

export default Head;
