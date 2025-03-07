import "./Section1.css";

import Illustration from "../../assets/img/Illustration.png";
import howtoapply from "../../assets/img/howtoapply.png";
const Section1 = () => {
  return (
    <>
      <section className="Section1">
        <div className="SectionText1">
          <h4>ABOUT US</h4>
          <p>
            The occupational traffic permit is one of the most important things
            in the company when carrying out freight transport. In fact, it is a
            prerequisite for doing business traffic at all.
          </p>
          <div className="SectionText2">
            <div>
              <p></p>
            </div>
            <div>
              <p>
                How do you do when you need to obtain a commercial traffic
                permit for freight transport to your business?
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={Illustration} alt="Illustration" />
        </div>
      </section>
      <section className="Section2">
        <div>
          <img src={howtoapply} alt="howtoapply" />
        </div>
        <div className="Section2Text">
          <h4>ABOUT US</h4>
          <p>
            The occupational traffic permit is one of the most important things
            in the company when carrying out freight transport. In fact, it is a
            prerequisite for doing business traffic at all.
          </p>
        </div>
      </section>
    </>
  );
};

export default Section1;
