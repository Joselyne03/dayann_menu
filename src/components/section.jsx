import "./section.css";
import * as React from "react";

export default function Section(title, prices) {
  return (
    <div className="section-div">
      <div className="header">
        <h1 className="title"> {title} </h1>
      </div>

      {prices.map((s, index) => (
        <ServiceCards
          key={index}
          service={s.service}
          type={s.type}
          details={s.details}
          oldPrice={s.oldPrice}
          newPrice={s.newPrice}
          duration={s.duration}
        />
      ))}
    </div>
  );
}
