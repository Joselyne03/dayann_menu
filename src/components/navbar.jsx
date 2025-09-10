import "./navbar.css";
import * as React from "react";


export default function Navbar({scrollToSection}) {
  return (
    <nav className="navbar">
        <div onClick={() => scrollToSection("services")} className="logo"><img className="logo-img" src="../images/logo.png" alt="Dayann Nail Spa"/></div>
        <div onClick={() => scrollToSection("services")} className="service-tab">Services</div>
        <div onClick={() => scrollToSection("special-bundle")} className="gallery-tab">Popular Bundles</div>
        <a href= "https://maps.app.goo.gl/d3natwU4gPdJ2raWA" target="_blank" rel="noopener noreferrer"> <i class="fa-solid fa-location-dot"></i> 1619 106 Lexington Ave </a>

    </nav>
  );
}