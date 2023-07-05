import React from 'react'
import Hero2 from '../Component/Hero2'
import Card from '../Component/Card'
import { Data } from '../Assets/data'
import "../Component/cardStyle.css";

const Service = () => {
    return (
        <div>
            <Hero2 heading="Our Service" sub_heading='This is Our Service' />
            <div className="price_card">
                <div className="card_container">
                    {
                        Data.map((data) => {
                            return (
                                <Card key={data.id} plane={data.plane}
                                    price={data.price} days={data.days} pages={data.pages}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Service
