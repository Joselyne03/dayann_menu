import * as React from "react";
import "./Popup-Card.css";

export default function PopupCard({
  service,
  type,
  details,
  price,
  handleClose,
}) {
  return (
    <div className="popout-container">
      <div className="card">
        <button className="close-btn" onclose={handleClose}>
          x
        </button>
        <img src="../images/nails.jpeg" alt='../images/logo512.png' className="header-img" />
        <div className="below">

        <div className="header">
          <div className="title">
            <h3>{service}</h3>
            <div className="tag">{type}</div>
          </div>
        </div>

        <div className="num-Info">
          {/* in row flex direction */}
          <div className="price-display">
            <h3 className="new-price">${price}</h3>
          </div>

        </div>

        <div className="details">
            <p>{details}</p>
        </div>

        </div>
        
      </div>
    </div>
  );
}
