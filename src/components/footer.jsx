import './footer.css';
import * as React from "react";


export default function Footer(){
    return(
        <div className='footer'>
            <h1> Ready to Book? </h1>
            <p> Call us at <a href="tel:9174090071" rel="noopener noreferrer">(917) 409-0071</a> . Walk-ins are also welcomed! </p>
            <p>Pay us a visit at  <a href= "https://maps.app.goo.gl/d3natwU4gPdJ2raWA" target="_blank" rel="noopener noreferrer"> 1701 1st Ave, New York, NY 10128 </a></p>

            <div className='contact'>
                Contact us through: 
                <a href="https://www.instagram.com/dayannnailspa2/" target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-instagram"></i> </a>
                <a href="https://www.facebook.com/p/Dayann-Nail-Spa-100063649235108/" target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-facebook"></i> </a>
            </div>
        </div>
    )
}