import React from "react";
import "./footer.css";
import Logo1 from "../assets/logo.jpg";
import Logo2 from "../assets/logo2.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="tm_newsletterdiv">
          <div id="newsletter_block_left" className="block container">
            <div className="col-md-6 col-xs-12 info-text">
              <div className="newsletter-info">
                {" "}
                Abonnez-vous à notre newsletter
              </div>
            </div>
            <div className="col-md-6 col-xs-6 block_content hb-animate-element right-to-left hb-in-viewport">
              <form >
                <div className="input-wrapper">
                  <input
                    name="email"
                    type="text"
                    value=""
                    placeholder="Votre adresse email"
                  ></input>
                  <input type="hidden" name="action" value="0"></input>
                  <input
                    className="submit-newsLetter"
                    name="submitNewsletter"
                    type="submit"
                    alt="Submit"
                    value="ENVOYER"
                  ></input>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="container-fluid">
          <div className="footer row">
            <div className="col-md-3 links block links hb-animate-element top-to-bottom hb-in-viewport">
              <a href="https://courses.monoprix.tn/ainZaghouan/">
                <img
                  src={Logo1}
                  width="90%"
                  alt="logo monoprix"
                  title="Monoprix Ain Zaghouan"
                />
              </a>

            </div>

            <div className="links block col-md-3">
              
              <div className="separateur_footer"></div>
              <span class="h3 hidden-md-down">Produits</span>
              <ul id="footer_sub_menu_76501" className="block_content">
                <li>
                  <a
                    id="link-product-page-prices-drop-4"
                    className="cms-page-link"
                    href="https://courses.monoprix.tn/ainZaghouan/promotions"
                    title="Produits en promotion"
                  >
                    Promotions
                  </a>
                </li>
                <li>
                  <a
                    id="link-product-page-new-products-4"
                    className="cms-page-link"
                    href="https://courses.monoprix.tn/ainZaghouan/nouveaux-produits"
                    title="Nos nouveaux produits"
                  >
                    Nouveaux produits
                  </a>
                </li>
                <li>
                  <a
                    id="link-product-page-best-sales-4"
                    className="cms-page-link"
                    href="https://courses.monoprix.tn/ainZaghouan/meilleures-ventes"
                    title="Nos meilleures ventes"
                  >
                    Meilleures ventes
                  </a>
                </li>
              </ul>
            </div>



            <div className="col-md-3 links block ">
              <span className="h3 hidden-md-down">Informations</span>
              <div className="separateur_footer"></div>
              <ul className=" block_content">
                <li>
                  <a
                    id="link-cms-page-1-5"
                    className="cms-page-link"
                    href="https://courses.monoprix.tn/ainZaghouan/content/1-faq"
                    title="Foire aux questions Monoprix, vos questions sur le click and collect et nos réponses Monoprix"
                  >
                    F.A.Q.
                  </a>
                </li>
                <li>
                  <a
                    id="link-cms-page-3-5"
                    className="cms-page-link"
                    href="https://courses.monoprix.tn/ainZaghouan/content/3-cgv"
                    title="Conditions générales de vente Monoprix"
                  >
                    Conditions Générales de Vente
                  </a>
                </li>
              </ul>
            </div>

            <div className="links block col-md-3">
              <div className="h3 hidden-md-down">Contact</div>
              <div className="separateur_footer"></div>
              <div className="contact-md">
                <div className="svg">
                  <img
                    src={Logo2}
                    alt=""
                    width="36"
                    height="31"
                  />
                </div>
                <div className="info-contact">
                  <div className="lign1">Contactez-nous gratuitement sur le</div>
                  <div className="green">
                    <a href="tel:80103456">80 103 456</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copy">
          <div className="div-copyright">
            <p className="copyright">
              <a
                className="blank"
                href="content/2-mentions-legales"
                title="Copyright Monoprix Mentions légales"
                alt="Copyright Monoprix Mentions légales"
              >
                Copyright © 2022 Monoprix Courses en ligne - DOTIT
              </a>
            </p>
          </div>
        </div>
        
         
      </div>
      
    </footer>
  );
};

export default Footer;
