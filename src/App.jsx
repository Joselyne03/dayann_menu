import "./App.css";
import { useEffect, useState, useRef } from "react";
import ServiceCards from "./components/serviceCards";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import SpecialBundle from "./components/special_bundle";
import Footer from "./components/footer";
// import Noise from './components/design/Noise';
// the prices should be separated based on sections and for every section, a new section div is created here along with the name of the section
const sections = [
  "Manicure",
  "Pedicure",
  "Men",
  "Kids",
  "Gel",
  "Acrylic",
  "Powder",
  "Spa",
  "Additional Services",
  "Special Bundles",
];

export default function App() {
  // ref iniciation
  const serviceRef = useRef(null);
  const specialBundleRef = useRef(null);

  // Fecth Prices as a useState
  const [prices, setPrices] = useState([]);
  const [specialPrices, setSpecialPrices] = useState([]);
  //use one UseEffect call and create two fetch functions
  // call these functions at the end
  useEffect(() => {
    const files = [
      "manicure.json",
      "pedicure.json",
      "men.json",
      "kids.json",
      "gel.json",
      "acrylic.json",
      "powder.json",
      "spa.json",
      "additional.json",
    ];

    const fetchAll = async () => {
      try {
        const results = {};
        await Promise.all(
          files.map(async (file, id) => {
            const res = await fetch(`/data/${file}`);
            results[sections[id]] = await res.json();
          })
        );
        setPrices(results);
      } catch (err) {
        console.error("Error loading JSON:", err);
      }
    };

    const fetchSpecialPrices = async () => {
      try {
        const res = await fetch("./data/special.json");
        const data = await res.json();
        setSpecialPrices(data);
      } catch (err) {
        console.error("Error loading JSON:", err);
      }
    };

    fetchAll();
    fetchSpecialPrices();
  }, []);

  return (
    <>
      <div className="App">
        <Navbar
          scrollToSection={(section) => {
            if (section === "services")
              serviceRef.current.scrollIntoView({ behavior: "smooth" });
            if (section === "special-bundle")
              specialBundleRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <div ref={serviceRef}>
          <Hero />
          {sections.filter((section) => prices[section]).map((section) =>(
            <div key={section}>
              <h2 className="section-title">{section}</h2>
              <div className="service-grid">
                {prices[section].map((s, index) => (
                  <ServiceCards
                    key={index}
                    service={s.service}
                    type={Array.isArray(s.type) ? s.type : [s.type]}
                    details={s.details}
                    price={s.price}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className = "second-section" ref={specialBundleRef}>
          <SpecialBundle />
          <div className="special-bundle-section">
            <h2 className="section-title">Special Bundle</h2>
            <div className="special-grid">
              {specialPrices.map((sp, index) => (
                <ServiceCards
                  key={index}
                  service={sp.service}
                  type={Array.isArray(sp.type) ? sp.type : [sp.type]}
                  details={sp.details}
                  price={sp.price}
                />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
