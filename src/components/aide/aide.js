import React from "react";
import "./aide.css";
import "../home/home.css";


const Aide = () => {
    return (
      <>
<div className="fixme">
        <div className="phone-fixed">
          <div className="phone">
            <a href="tel:80103456">
              {" "}
              <img
                src="https://courses.monoprix.tn/themes/PRSADD078/assets/img/icon-telephone.svg"
                alt="service client"
              />
            </a>
          </div>
          <a href="tel:80103456" className="text-phone">
            {" "}
            Aide ?
          </a>
     </div>
 </div>
 </>
  );
}
export default Aide;