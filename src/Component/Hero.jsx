import React from 'react'
import { Link } from 'react-router-dom'
import './heroStyle.css';
import heroImg from '../Assets/hero-bg.jpg'

const Hero = () => {
    return (
        <div>
            <div className="hero">
                <div className="mask">
                    <img src={heroImg} alt="hero img" className="hero_img" />
                </div>
                <div className="content">
                    <p>I am, Developer</p>
                    <h1>React Developer</h1>
                    <div className="hero-btn">
                        <Link to="/service" className="btn">Service</Link>
                        <Link to="/contact" className="btn btn-light">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
