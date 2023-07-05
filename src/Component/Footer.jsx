import React from 'react'
// import { Link } from 'react-router-dom'
import './footer.css';
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedinIn, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>srisampat, kavuri hiils, madhapur</p>
                            <p>Hyderabad, Telengana -500081</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />+91 07755-9955</h4>
                    </div>
                    <div className="mail">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />support@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About Company</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, iusto!</p>
                    <div className="social_media">

                        <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaLinkedinIn size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaWhatsapp size={30} style={{ color: "#fff", marginRight: "1rem" }} />

                    </div>
                </div>
            </div>

        </footer>
    )
}
export default Footer
