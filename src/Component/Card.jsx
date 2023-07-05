import React from 'react'
import "./cardStyle.css";
import { Link } from 'react-router-dom';

const Card = (prop) => {
    return (
        <div className="card">
            <h3> -- {prop.plane} --</h3>
            <div className="bar"></div>
            <p className="btc">$ {prop.price}</p>
            <p>- {prop.days} -</p>
            <p>- {prop.pages} -</p>
            <p>- Features -</p>
            <p>- Responsive Design -</p>
            <Link to='/contact' className='btn'>Purchase Now</Link>
        </div>
    )
}

export default Card
