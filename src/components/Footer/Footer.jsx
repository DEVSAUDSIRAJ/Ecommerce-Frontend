import React from 'react'
import "./Footer.css"
import footerLogo from "../Assets/logo_big.png"
import instagramIcon from "../Assets/instagram_icon.png"
import pinterestIcon from "../Assets/pintester_icon.png"
import whatsapIcon from "../Assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footerLogo} alt="footerlogo"/>
            <p>Shopify</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instagramIcon} alt="footerIcon" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterestIcon} alt="footerIcon" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapIcon} alt="footerIcon" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @2024 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer