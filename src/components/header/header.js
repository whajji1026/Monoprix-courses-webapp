import React from "react";
import "./header.css";
import { useParams } from "react-router-dom";
import { shops } from "../cards/cards";
import { useNavigate } from "react-router-dom";
import Logo1 from "../assets/logo.jpg";
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  const { shopId } = useParams();
  const navigate = useNavigate();
  const shopName = shops.find((shop) => shop.id === parseInt(shopId));

  return (
    <header>
      <div className="header-banner">
        <div className="container-fluid">
          <div className="header-nav-content">
            <div className="header-social">
              <div className="social">
                <div className="text-social">
                  <span className="scx"> Suivez-nous sur:</span>
                  <span className="icon-media">
                    <a href="https://www.facebook.com/monoprix.tunisie/">
                      <img
                        src="https://courses.monoprix.tn/elmenzah6/themes/PRSADD078/assets/img/icon-fb.svg"
                        alt="facebook icon"
                        width="32"
                      />
                    </a>
                  </span>
                  <span className="icon-media">
                    <a href="https://www.instagram.com/monoprix.tunisie/">
                      <img
                        src="https://courses.monoprix.tn/elmenzah6/themes/PRSADD078/assets/img/icon-insta.svg"
                        alt="instagram icon"
                        width="32"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="header-shop">
              <img
                src="https://courses.monoprix.tn/elmenzah6/themes/PRSADD078/assets/img/shoe-shop.svg"
                alt="instagram icon"
                width="16"
              />

              <div
                onClick={() => {
                  navigate(`/`);
                }}
              >
                <span className="shop-name" id="shop-popup">
                  {shopName.nameShop}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-nav">
        <div className="header-wrapper">
          <div className="header-logo-container">
            <div
              className="logo"
              onClick={() => {
                navigate(`/shop/${shopId}`);
              }}
            >
              <img className="img-logo" src={Logo1} />
            </div>
          </div>

          <div className="header-content">
            <div className="search-widget">
              <span className="search_button"></span>
              <div className="searchtoggle">
                <form>
                  <span
                    role="status"
                    aria-live="polite"
                    className="ui-helper-hidden-accessible"
                  ></span>
                  <input
                    type="text"
                    name="s"
                    value=""
                    placeholder="Rechercher ..."
                    aria-label="Rechercher"
                    style={{ border: " 0 !important" }}
                  ></input>
                  <button type="submit" className="pull-right">
                    <FaSearch className="material-icons" />
                  </button>
                </form>
              </div>
            </div>
            <div className="info-wrapper">
              <div id="_desktop_user_info">
                <div className="user-info">
                  <div
                    className="div_singin"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <div className="sep">
                      <a className="smile " href="#" rel="nofollow">
                        <img
                          src="https://courses.monoprix.tn/ainZaghouan/themes/PRSADD078/assets/img/credit-card.svg"
                          alt="smile-icon"
                        />
                        <span className="account-smile">
                          {" "}
                          Smiles
                        </span>
                      </a>
                    </div>
                    <span className="separator">|</span>
                    <div className="sep">
                      <a
                        href="#popup_sign_form"
                        title="Identifiez-vous"
                        rel="nofollow"
                        id="popup_sign"
                      >
                        <img
                          src="https://courses.monoprix.tn/ainZaghouan/themes/PRSADD078/assets/img/connexion.svg"
                          alt="smile-icon"
                        />
                        <span className=" account-smile">
                          Connexion
                        </span>
                      </a>
                    </div>
                    <span className="separator margin-right-10">|</span>
                    <div className="sep">
                      

                      <a
                        rel="nofollow"
                        href=""
                      ><img
                        src="https://courses.monoprix.tn/ainZaghouan//themes/PRSADD078/assets/img/shopping-cart.svg"
                        alt="shopping-cart"
                        className="shopping-cart"
                      />
                        <span className="account-smile">
                          Mon panier :{" "}
                        </span>
                        <span className="account-smile">0</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
