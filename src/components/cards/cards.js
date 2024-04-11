import React, { useState } from "react";
import "./cards.css";
import "../home/home.css";
import "../navbar/navbar.css";
import Mon1 from "../assets/mon1.jpg";
import Mon2 from "../assets/mon2.jpg";
import Mon3 from "../assets/mon3.jpg";
import Mon4 from "../assets/mon4.jpg";
import Mon5 from "../assets/mon5.jpg";
import Mon6 from "../assets/mon6.jpg";
import Mon7 from "../assets/mon7.jpg";
import Mon8 from "../assets/mon8.jpg";
import Mon9 from "../assets/mon9.jpg";
import Mon10 from "../assets/mon10.jpg";
import Mon11 from "../assets/mon11.jpg";
import Mon12 from "../assets/mon12.jpg";
import Mon13 from "../assets/mon13.jpg";
import Mon14 from "../assets/mon14.jpg";
import Mon15 from "../assets/mon15.jpg";
import MyVerticallyCenteredModal from "../modal/modal";

export const shops = [
  {
    id: 1,
    nameShop: "Monoprix El Menzah 6",
    address:
      "Rue du prince Abdel Kerim El Jazairi, Centre Commerical Menzah 6 ",
    image: Mon1,
    iten: "https://www.google.com/maps/place/36%C2%B051'50.8%22N+10%C2%B017'22.8%22E/@36.8641119,10.2896639,17z/data=!3m1!4b1!4m4!3m3!8m2!3d36.8641119!4d10.2896639?entry=ttu",
    zones: [
      "10 décembre",
      "Cité el khadhra",
      "Cité olympique",
      "Borj baccouch",
      "Charguia 1+2",
      "Manzah 1 à 9",
      "Cité mahrajène",
      "Cité sportive",
      "Centre urbain nord",
      "Mutuelleville",
      "El manar 1+2",
      "Ariana",
      "Borj louzir",
      "Hédi nouira",
      "Cité ennozha",
      "Cité ghazella",
      "Riadh andalous",
      "Montplaisir",
      "Enkhilet",
    ],
  },
  {
    id: 2,
    nameShop: "Monoprix Ain Zaghouan Nord",
    address: "Résidence mehdi, Ain zaghouan nord",
    image: Mon2,
    zones: [
      "Ain Zaghouan",
      "Aouina",
      "Jardins de Carthage",
      "Les Berges du Lac 2",
      "Sidi Daoud",
      "La Soukra",
    ],
    iten: "https://www.google.com/maps/search/?api=1&query=36.86411190,10.28966390",
  },
  {
    id: 3,
    nameShop: "Monoprix Zayatine (Cité Les Palmeraies)",
    address: "Rue Cheikh Mohamed Enneifer",
    image: Mon3,
    zones: [
      "Aouina",
      "Ain Zaghouan",
      "Jardins de Carthage",
      "Les Berges du Lac 2",
      "Sidi Daoud",
      "La Soukra",
    ],
    iten: "https://www.google.com/maps/place/36%C2%B051'46.1%22N+10%C2%B016'10.2%22E/@36.862796,10.269511,17z/data=!3m1!4b1!4m4!3m3!8m2!3d36.862796!4d10.269511?entry=ttu",
  },
  {
    id: 4,
    nameShop: "Monoprix Carthage",
    address: "126 Route de La Goulette, Site archéologique de Carthage",
    image: Mon4,
    zones: [
      "Carthage",
      "La Goulette",
      "Le Kram",
      "Salambo",
      "Amilcar",
      "Sidi Bou Said",
    ],
    iten: "https://www.google.com/maps/place/36%C2%B051'25.3%22N+10%C2%B007'39.4%22E/@36.8570129,10.1276135,17z/data=!3m1!4b1!4m4!3m3!8m2!3d36.8570129!4d10.1276135?entry=ttu",
  },
  {
    id: 5,
    nameShop: "Monoprix Ennasr",
    address: "12 Avenue de Hédi Nouira",
    image: Mon5,
    zones: [
      "Ariana ville",
      "Cité El Ghazela",
      "Menzah V",
      "Menzah VI",
      "Menzah VII",
      "Menzah VIII",
      "Menzah IX",
      "Manar 1",
      "Manar 2",
      "Mnihla",
      "Riadh Al Andalous",
      "Borj Louzir",
    ],
    iten: "https://www.google.com/maps/place/36%C2%B051'22.2%22N+10%C2%B009'28.2%22E/@36.856159,10.157842,17z/data=!3m1!4b1!4m4!3m3!8m2!3d36.856159!4d10.157842?entry=ttu",
  },
  {
    id: 6,
    nameShop: 'Monoprix Les Jardins d"El Menzah',
    address: 'Avenue El Fell, Jardins d"El Menzah 2',
    image: Mon6,
    zones: ["Borj Louzir", "Ennasr 1", "Jardins d'El Menzah 1", "Cité Rafaha"],
    iten: "https://www.google.com/maps/search/?api=1&query=36.85701290,10.12761350",
  },
  {
    id: 7,
    nameShop: "Monoprix La Marsa",
    address: "Rue Abdelhafidh El Mekki",
    image: Mon7,
    zones: ["La Marsa", "Gammarth"],
    iten: "https://www.google.com/maps/place/36%C2%B053'03.0%22N+10%C2%B019'47.2%22E/@36.8841681,10.3297628,17z/data=!3m1!4b1!4m4!3m3!8m2!3d36.8841681!4d10.3297628?entry=ttu",
  },
  {
    id: 8,
    nameShop: "Monoprix Lac",
    address: "2 Lac Leman",
    image: Mon8,
    zones: ["Lac I", "Lac II", "Cité El Khadhra"],
    iten: "https://www.google.com/maps/search/?api=1&query=36.83848500,10.23793800",
  },
  {
    id: 9,
    nameShop: "Monoprix Saadi",
    address: "Avenue 10 Décembre Immeuble Saadi",
    image: Mon9,
    zones: [
      "10 décembre",
      "Cité el khadhra",
      "Cité olympique",
      "Borj baccouch",
      "Charguia 1+2",
      "Manzah 1 à 5",
      "Cité mahrajène",
      "France ville",
      "Mutuelleville",
      "El manar",
      "Ariana",
      "Borj louzir",
      "Hédi nouira",
      "Cité ghazella",
      "Riadh andalous",
      "Montplaisir",
      "Enkhilet",
    ],
    iten: "https://www.google.com/maps/search/?api=1&query=36.84548100,10.18334900",
  },
  {
    id: 10,
    nameShop: "Monoprix Manouba",
    address: "Immeuble Omnia Cité des Oranges",
    image: Mon10,
    zones: [
      "Manouba",
      "Khaznadar",
      "Denden",
      "Oued Ellil",
      "Cité Ettadhamen",
      "Sanhaja",
      "Essaidia",
      "El Agba",
      "Douar Hicher",
      "Ksar Said",
    ],
    iten: "https://www.google.com/maps/place/36%C2%B048'57.7%22N+10%C2%B004'54.4%22E/@36.8160133,10.08177,17z/data=!3m1!4b1!4m4!3m3!8m2!3d36.8160133!4d10.08177?entry=ttu",
  },
  {
    id: 11,
    nameShop: "Monoprix Bardo Hneya",
    address: "39, Avenue Habib Bouguatfa",
    image: Mon11,
    zones: [
      "Bardo",
      "El Omrane",
      "Cité Rommana",
      "Bab Saadoun",
      "Bouchoucha",
      "La kasba",
      "Tunis (centre ville)",
      "Lafayette",
      "Cité Ezzouhour 1 2 3 et 4",
      "Ezzahrouni",
      "Cité Fattouma Bourguiba",
      "Cité Somrane",
      "Ras Tabia",
      "Cité Ettahrir",
      "Cité Ibn Khaldoun",
      "Montfleury",
    ],
    iten: "https://www.google.com/maps/place/36°48&apos;45.2&quot;N+10°08&apos;56.9&quot;E/@36.8125427,10.1491408,17z/data=!3m1!4b1!4m4!3m3!8m2!3d36.8125427!4d10.1491408?entry=ttu",
  },
  {
    id: 12,
    nameShop: "Monoprix Ezzahra",
    address: "Avenue Taieb Mhiri",
    image: Mon12,
    zones: [
      "Ezzahra",
      "Boumhel",
      "Radès",
      "Nouvelle Médina",
      "Hammam Lif",
      "Hammam Chatt",
    ],
    iten: "https://www.google.com/maps/place/35%C2%B050&quot27.8%22N+10%C2%B037&quot09.6%22E/@35.841044,10.619344,17z/data=!3m1!4b1!4m4!3m3!8m2!3d35.841044!4d10.619344?entry=ttu",
  },
  {
    id: 13,
    nameShop: "Monoprix Sousse Maghreb Arabe",
    address: "Avenue la Perle du Sahel, Place du Maghreb arabe",
    image: Mon13,
    zones: [
      "Kalaa kbira",
      "Kalaa sghira",
      "Sahloul",
      "Kantaoui hammam sousse",
      "Bab bhar sousse",
      "Khzema",
      "Jawhara",
      "Cité ettamir",
      "Cité ezzouhour",
      "Cité riadh",
      "Chatt mariem",
      "Bouhssina",
    ],
    iten: "https://www.google.com/maps/place/34%C2%B043&quot56.1%22N+10%C2%B045&quot51.5%22E/@34.7322471,10.7642918,17z/data=!3m1!4b1!4m4!3m3!8m2!3d34.7322471!4d10.7642918?entry=ttu",
  },
  {
    id: 14,
    nameShop: "Monoprix Sfax Centre",
    address: "40 Avenue de Hedi Chaker",
    image: Mon14,
    zones: [
      "Sidi Mansour",
      "Sakiet Ezzit",
      "Gremda",
      "El Ain",
      "Oued Chaabouni",
      "Thyna",
    ],
    iten: "https://www.google.com/maps/place/34%C2%B043&quot56.1%22N+10%C2%B045&quot51.5%22E/@34.7322471,10.7642918,17z/data=!3m1!4b1!4m4!3m3!8m2!3d34.7322471!4d10.7642918?entry=ttu",
  },
  {
    id: 15,
    nameShop: "Monoprix Sfax Ain",
    address: "Quartier 15 Novembre 1955, Route El Ain",
    image: Mon15,
    zones: [
      "Sidi Mansour",
      "Sakiet Ezzit",
      "Gremda",
      "El Ain",
      "Oued Chaabouni",
      "Thyna",
    ],
    iten: "https://www.google.com/maps/place/34%C2%B044&quot42.4%22N+10%C2%B044&quot40.3%22E/@34.745119,10.744536,17z/data=!3m1!4b1!4m4!3m3!8m2!3d34.745119!4d10.744536?entry=ttu",
  },
];

const MiniCard = ({ element }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="shopCard">
      <div className="cardheader" style={{maxWidth:'100%'}}>
        <img 
        src={element.image}
        alt={element.nameShop}
        title={element.nameShop}
        className="img-store-home"
        />
      </div>
      <div className="cardBody">
        <div className="card-title flex">
          <div className="icon">
            <img
              src="https://courses.monoprix.tn/themes/PRSADD078/assets/img/placeholder.svg "
              alt="address"
              className="icon-address"
            />
          </div>
          <div className="address">
            <div className="name">{element.nameShop}</div>
            <div className="address-name">
              {element.address}
            </div>
          </div>
        </div>
        <div className="card-text flex">
          <div className="type-delivery ">
            <div className="margin-bottom-10 flex">
              <div className="icon">
                <img
                  src="https://courses.monoprix.tn/themes/PRSADD078/assets/img/shoe-shop.svg"
                  alt="shop"
                  className="icon-address"
                />
              </div>
              <div className="title-delivery">Retrait en Magasin</div>
            </div>
            <div className="margin-bottom-10 flex">
              <div className="icon">
                <img
                  src="https://courses.monoprix.tn/themes/PRSADD078/assets/img/icon-livraison.svg"
                  alt="shop"
                  className="icon-address"
                />
              </div>
              <div className="title-delivery">Livraison à domicile</div>
            </div>
          </div>
          <div className="action">
            <button
              data-target="#popup-24"
              className="open-modal"
              variant="primary"
              onClick={() => setModalShow(true)}
            >
              <img
                src="https://courses.monoprix.tn/themes/PRSADD078/assets/img/Icone-arrow.svg"
                alt="shop"
              />
            </button>
            <MyVerticallyCenteredModal
              show={modalShow}
              element={element}
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const CardsList = ({ shops }) => {
  return (
    <div
      className="element-list"
    >
      {shops.map((element, id) => (
        <div key={id}>
          <MiniCard key={element.id} element={element} />
        </div>
      ))}
    </div>
  );
};

const Cards = () => {
  return (
    <>
      <CardsList shops={shops} />
    </>
  );
};

export default Cards;
