import React from "react";
import Header from '../header/header';
import Footer from '../footer/footer';
import Aide from  "../aide/aide";
import Swiper1 from "../swiper1/swiper1";
import Products from "../products/products";
import Contact from "../contacts/contacts";



const Shop = () => {
  return (
    <>
      
        <Header />
        <Swiper1/>
        <Products/>
        <Contact/>
        <Aide/>
        <Footer />
      
    </>
  );
};

export default Shop;
