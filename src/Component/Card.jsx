import React from 'react'
import "./cardStyle.css";
import { Link } from 'react-router-dom';
import { Pricing } from '../Assets/data'

const Card = () => {
    return (
        <div className="price_card">
            <h1 className="pricing_heading"> Pricing </h1>
            <div className="card_container">
                {
                    Pricing.map((data) => {
                        return (
                            <div className="card" key={data.id}>
                                <h3> -- {data.plane} --</h3>
                                <div className="bar"></div>
                                <p className="btc">$ {data.price}</p>
                                <p>- {data.days} -</p>
                                <p>- {data.pages} -</p>
                                <p>- Features -</p>
                                <p>- Responsive Design -</p>
                                <Link to='/contact' className='btn'>Purchase Now</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>



    )
}

export default Card
