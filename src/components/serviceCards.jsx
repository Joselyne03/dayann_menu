import * as React from "react";
import "./serviceCards.css";
import PopupCard from "./design/Popup-Card";
export default function ServiceCards({
  service,
  type,
  details,
  price
}) {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);

  const handleClose = () => setClick(false);
  return (
    <div className="service-cards" onClick={handleClick}>
      <div className="left">
        <div className="header">
          <div className="title">
            <h3>{service}</h3>
            {type.map((t,index) => (
              <div className= {`tag ${t.toLowerCase()}`} >{t}</div>
            )
            )}
          </div>
          <div className="right-corner">
            <div className="price-display">
              <h3 className="new-price">${price}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="image">
        <img src="../images/nails.jpeg" alt="of a nail" className="img"/>
      </div>
      
      {click &&(
        <PopupCard
        //   key={index}
          service={service}
          type={type}
          details={details}
          price = {price}
          onClose = {handleClose}
        />
      )
      }
     
    </div>
  );
}
