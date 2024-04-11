import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.css";
import "./modal.css";
import { useNavigate } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  const shop = props.element;
  const navigate = useNavigate();
  const shopId = shop?.id;

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div
        className="headerModal"
        closeButton
        style={{ backgroundImage: `url(${shop.image})` }}
      >
        <div
          className="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={props.onHide}
        >
          <img
            className="icon-close"
            src="https://courses.monoprix.tn/themes/PRSADD078/assets/img/close.svg"
          />
        </div>
      </div>

      <div className="modal-body">
        <div className="card-title flex">
          <div className="icon">
            <img
              className="iconImg"
              src="https://courses.monoprix.tn/themes/PRSADD078/assets/img/placeholder.svg "
              alt={shop.address}
            />
          </div>
          {shop?.nameShop && (
            <div className="address">
              <div className="name">{shop?.nameShop || ""}</div>
              <div className="address-name">{shop?.address || ""}</div>
            </div>
          )}
        </div>
        <div className="button-map">
          <a href={shop.iten}>
            <div className="flex align-item">
              <div className="icon">
                <img
                  src="https://courses.monoprix.tn/themes/PRSADD078/assets/img/iteneraire.svg"
                  alt="address"
                />
              </div>
              <div className="button-value">itinéraire</div>
            </div>
          </a>
        </div>
        <div className="card-text margin-bottom-10">
          <div className="type-delivery flex">
            <div className="margin-bottom-10 flex">
              <div className="icon">
                <img
                  src="https://courses.monoprix.tn/themes/PRSADD078/assets/img/shoe-shop.svg"
                  alt="shop"
                />
              </div>
              <div className="title-delivery">Retrait en Magasin</div>
            </div>
            <div className="margin-bottom-10 flex margin-left-30">
              <div className="icon">
                <img
                  src="https://courses.monoprix.tn/themes/PRSADD078/assets/img/icon-livraison.svg"
                  alt="shop"
                />
              </div>
              <div className="title-delivery">Livraison à domicile</div>
            </div>
          </div>
          <div className="delivery-zone">
            <div className="title-block">Zones de livraison :</div>
            <ul className="ZoneNames">
              {shop?.zones?.map((zone, id) => (
                <li key={id}> {zone}</li>
              ))}
            </ul>
          </div>
          <div className="footer-action">
            <div
              onClick={() => {
                navigate(`/shop/${shopId}`);
              }}
              className="button-footer"
            >
              Commencer mes courses
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
