import React from "react";
import Navbar from "../navbar/navbar";
import Cards from "../cards/cards";
import "../home/home.css";
import Aide from  "../aide/aide";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="block-title center">
        Trouvez le magasin près de chez vous et commencez vos courses !
      </div>
      <Aide/>
      <div style={{ maxWidth: "100vw", padding: "0px 55px 55px 55px", }}>
      <Cards />
      </div>
    </>
  );
}
