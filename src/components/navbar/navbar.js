import React from "react";
import "./navbar.css";
import "../home/home.css";
import Logo1 from "../assets/logo.jpg";
import Logo2 from "../assets/logo2.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="col11">
        <div className="multi-media margin-40">
          <div className="suivez">
            <span className="sux">Suivez-nous sur:</span>
            <span className="icon-media">
              <a href="https://www.facebook.com/monoprix.tunisie/">
                <img
                  src="https://courses.monoprix.tn/themes/PRSADD078/assets/img/icon-fb.svg"
                  alt="facebook icon"
                />
              </a>
            </span>
            <span className="icon-media">
              <a href="https://www.instagram.com/monoprix.tunisie/">
                <img
                  src="https://courses.monoprix.tn/themes/PRSADD078/assets/img/icon-insta.svg"
                  alt="instagram icon"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="col1">
        <div className="logo center">
          <a href="https://courses.monoprix.tn/">
            <img
              className="logo img-responsive"
              src={Logo1}
              alt="Monoprix courses en ligne"
            />
          </a>
        </div>
      </div>
      <div className="col1">
        <div className="contact margin-40">
          <img src={Logo2} alt="service client" />
          <div className="margin-left-15">
            <div className="contact">Contactez-nous gratuitement</div>
            <div className="contact br">
              sur le{" "}
              <a href="tel:80103456" className="green">
                80 103 456

              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
