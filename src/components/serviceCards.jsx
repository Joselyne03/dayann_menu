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

  // add bits of details with ... to encourage users to click on the card
  const charLimit = 50
  const displayText = details.length > charLimit ? details.slice(0,charLimit) + '...' : details;
  return (
    <div className="service-cards" onClick={handleClick}>
        <div className="info">
          <div className="left-side">
          <div className="title">
            <h3>{service}</h3>
          </div>
          <div className="tags">
          {type.map((t,index) => (
              <div className= {`tag ${t.toLowerCase()}`} >{t}</div>
            )
            )}

          </div>
          {details && (
            <div className="details">
              {displayText}
            </div>
          )

          }
          </div>
          
          <div className="right-corner">
            <div className="price-display">
              <h3 className="new-price">
                {typeof price === "number" && price > 0 ? `$${price}` : ""}
              </h3>
            </div>
          </div>

        </div>

      
      {click && details  &&(
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
