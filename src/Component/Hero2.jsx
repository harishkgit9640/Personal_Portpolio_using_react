import React from 'react'
import './hero2Style.css';
const Hero2 = (prop) => {
    return (
        <div className='hero_img2'>
            <div className="heading">
                <h1>{prop.heading}</h1>
                <p>{prop.sub_heading}</p>
            </div>
        </div>
    )
}
export default Hero2
