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
        <div className="below">

        <div className="header">
          <div className="pop-title">
            <h3>{service}</h3>
          </div>
          <div className="pop-tags">
          {type.map((t,index) => (
              <div className= {`tag ${t.toLowerCase()}`} >{t}</div>
            )
            )}

          </div>
        </div>


        <div className="pop-details">
            <p>{details}</p>
        </div>

        <div className="num-Info">
          {/* in row flex direction */}
          <div className="price-display">
            <h3 className="new-price">{typeof price === "number" && price > 0 ? `$${price}` : ""}</h3>
          </div>

        </div>

        </div>
        
      </div>
    </div>
  );
}
