import "./Footer.css"
import shlogo from "../Footer/images/Logo Footer.png"
import facebook from "../Footer/images/facebook-logo.png"
import instagram from "../Footer/images/instagram.png"
import whatsapp from "../Footer/images/whatsapplogo.svg"
import {NavLink} from "react-router-dom";

export default function Footer () {
    return (
       
    <div className="containerFooter">
    <img className="logo" src={shlogo} alt="logo"></img>
    <p className="footerDescription">Sweet Home is your destination for exceptional furniture and home decor that will transform your living spaces into stunning showcases of style and comfort. We offer an extensive collection of high-design pieces, ranging from contemporary marvels to rediscovered vintage icons. Each item is meticulously crafted with premium materials, ensuring exceptional quality that will stand the test of time.</p>
    <div className="separator"></div>
    <p className="followUs">FOLLOW US</p>
    <img className="facebooklogo" src={facebook} alt="facebookLogo"></img>
    <img className="instagramlogo" src={instagram} alt="instagramLogo"></img>
    <img className="whatsapplogo" src={whatsapp} alt="whatsappLogo"></img>
    <p className="footerText2">© 2023 Sweet Home. All Rights Reserved. No part of this website, including texts, images, designs, or any other element, may be reproduced or transmitted in any form or by any means without prior written permission from Sweet Home. </p>
    
    </div>
    )
}

