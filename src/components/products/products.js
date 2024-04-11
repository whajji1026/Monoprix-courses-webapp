import React from "react";
import "./products.css";

export const products = [
  {
    id: 1,
    producer: "Joy's",
    productname: "Chips",
    weight: "70g-sel",
    image:
      "https://courses.monoprix.tn/ainZaghouan/129309-home_default/chips.jpg",
    price: "3,990 DT",
    newprice: "2,890 DT",
  },
  {
    id: 2,
    producer: "Joy's",
    productname: "Chips",
    weight: "70g-sel",
    image:
      "https://courses.monoprix.tn/ainZaghouan/129309-home_default/chips.jpg",
    price: "3,990 DT",
    newprice: "2,890 DT",
  },
  {
    id: 3,
    producer: "Joy's",
    productname: "Chips",
    weight: "70g-sel",
    image:
      "https://courses.monoprix.tn/ainZaghouan/129309-home_default/chips.jpg",
    price: "3,990 DT",
    newprice: "2,890 DT",
  },
  {
    id: 4,
    producer: "Joy's",
    productname: "Chips",
    weight: "70g-sel",
    image:
      "https://courses.monoprix.tn/ainZaghouan/129309-home_default/chips.jpg",
    price: "3,990 DT",
    newprice: "2,890 DT",
  },
  {
    id: 5,
    producer: "Joy's",
    productname: "Chips",
    weight: "70g-sel",
    image:
      "https://courses.monoprix.tn/ainZaghouan/129309-home_default/chips.jpg",
    price: "3,990 DT",
    newprice: "2,890 DT",
  },
  {
    id: 6,
    producer: "Joy's",
    productname: "Chips",
    weight: "70g-sel",
    image:
      "https://courses.monoprix.tn/ainZaghouan/129309-home_default/chips.jpg",
    price: "3,990 DT",
    newprice: "2,890 DT",
  },
];

const Miniproduct = ({ element }) => {
  return (
    <div
      className="product-miniature js-product-miniature"
      data-id-product="16609"
      data-id-product-attribute="0"
      itemscope=""
      itemtype="http://schema.org/Product"
    >
      <div className="product-description">
        <div className="product-text">
          <div className="promo">
            <div className="promo-flag"> Promotion</div>
          </div>
          <div className="div_manufacturer_name">
            <span className="text1">{element.producer}</span>
          </div>

          <div className="h3 product-title" itemprop="name">
            <a href="">
              {element.productname}
            </a>
          </div>
          <div className="div_contenance">
            {" "}
            <span className="text1">{element.weight}</span>
          </div>
        </div>
        <div className="thumbnail-container">
          <a
            href=""
            className="thumbnail product-thumbnail"
          >
            <img className="img"
              src={element.image}
              alt={element.productname}
              data-full-size-image-url={element.image}
            />
          </a>
        </div>

        <div className="flex price-block">
          <div className="price-flex">
            <div className="regular-price">{element.price}</div>
            <div className="product-price-and-shipping  price-under">
              <span itemprop="price" className="price">
                {element.newprice}
              </span>
            </div>
          </div>

          <div className="action-footer-product">
            <form className="quantity_form" id="qty-action">
              <div className="float-right">
                <button
                  data-button-action="add-to-cart"
                  className="btn btn-primary button-quantity wb-add-cart custom-add-to-cart"
                  data-id="16609"
                >
                  <img
                    src="https://courses.monoprix.tn/ainZaghouan/themes/PRSADD078/assets/img/panier.svg"
                    className="custom-width"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
//   console.log(products, "Products");
  return (
    <>
      <section className="special-products clearfix">
        <div className="custom-container">
          <div className="products">
            <div className="row">
              <div className="col-md-4 padding-left">
                <a href="https://courses.monoprix.tn/ainZaghouan/connexion">
                  <div className="block-promo-home">
                    <img
                      src="https://courses.monoprix.tn/ainZaghouan/themes/PRSADD078/assets/img/image-monoprix-off.png"
                      className="feautred-img"
                    />
                  </div>
                </a>
              </div>
              <div className="col-md-8 padding-right">
                <ul className="prodduct_list ">
                    {products?.map((element, id) => (
                      <li className="product_item col-xs-12 col-sm-6 col-md-4 col-lg-4" key={id}>
                        <Miniproduct key={element.id} element={element} />
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
