import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'
import img_1 from '../Assets/img_1.png';
import img_2 from '../Assets/img_2.png';
const AboutContent = () => {
    return (
        <div>
            <div className="about_container">
                <div className="left">
                    <h1>Who Am I?</h1>
                    <p>I am Software Engineer,React Developer,php Developer,Blogger</p>
                    <Link to='/contact'>
                        <button className='btn'>Contact</button>
                    </Link>
                </div>
                <div className="right">
                    <div className="about-img">
                        <div className="img-stack top">
                            <img src={img_1} alt="img" />
                        </div>
                        <div className="img-stack bottom">
                            <img src={img_2} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent
