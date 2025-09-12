import "./navbar.css";
import * as React from "react";


export default function Navbar({scrollToSection}) {
  return (
    <nav className="navbar">
        <div onClick={() => scrollToSection("services")} className="logo"><img className="logo-img" src="../images/dns.png" alt="Dayann Nail Spa"/></div>
        <div onClick={() => scrollToSection("services")} className="service-tab">Services</div>
        <div onClick={() => scrollToSection("special-bundle")} className="gallery-tab">Popular Bundles</div>
    </nav>
  );
}