import React from "react";
import "./contacts.css";
import Logo2 from "../assets/logo2.svg";
import Catalogue from "../assets/catalogue.svg";
import Card1 from "../assets/card1.png";
import Card2 from "../assets/card2.png";


const Contact = () => {
  return (
    <>
      <div className="custom-container">
        <div className="row">
          <section
            className="tm-hometabcontent  top-to-bottom hb-in-viewport"
            // style={{marginTop: "50px",}}
          >
            <div className="row static-block-top">
              <div className="col-md-3 padding-left">
                <div className="block-top-home">
                  <div className="social-media text-static-block">
                    Suivez-nous sur:
                    <span>
                      {" "}
                      <a href="https://www.facebook.com/monoprix.tunisie/">
                        <img
                          src="https://courses.monoprix.tn/themes/PRSADD078/assets/img/icon-fb.svg"
                          alt="facebook icon"
                          className="margin-left-15"
                        />
                      </a>{" "}
                      <a href="https://www.instagram.com/monoprix.tunisie/">
                        {" "}
                        <img
                          src="https://courses.monoprix.tn/themes/PRSADD078/assets/img/icon-insta.svg"
                          alt="instagram icon"
                          className="margin-left-15"
                        />{" "}
                      </a>{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="block-top-home ">
                  <div className="contact-us text-static-block flex-contact-text">
                    <span>
                      {" "}
                      <img
                        src={Logo2}
                        alt="service client"
                        className="margin-right-15"
                      />{" "}
                    </span>{" "}
                    <span className="flex-contact">
                      <span className="flex-contact">
                        {" "}
                        Contactez-nous gratuitement sur le{" "}
                      </span>
                    </span>
                    <div className="tel-flex">
                      <a href="tel:80103456"> 80 103 456</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 padding-right">
                <div className="block-top-home">
                  <div>
                    <a href="https://online.fliphtml5.com/hgrm/qxxk/#p=1">
                      <img
                        src={Catalogue}
                        alt=""
                        width="18"
                        height="29"
                        className="margin-right-15"
                      />
                      <span className="text-static-block">
                        Consultez notre clatalogue promotionnel
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="custom-container   cart-promo">
        <div className="row">
          <div className="col-md-6 margin-bottom-30 ">
            <a href="https://monoprixsmiles.monoprix.tn">
              <img src={Card1} alt="" className="img-100" />
            </a>
          </div>
          <div className="col-md-6 margin-bottom-30 ">
            <img src={Card2} alt="" className="img-100" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
