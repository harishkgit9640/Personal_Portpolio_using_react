import React from 'react'
import Hero2 from '../Component/Hero2'
import Card from '../Component/Card'
import { Pricing, Projects_details } from '../Assets/data'
import "../Component/cardStyle.css";
import Projects from '../Component/Projects';
const Service = () => {
    return (
        <div>
            <Hero2 heading="Our Service" sub_heading='This is Our Service' />
            <h1 className="project_heading"> Projects </h1>
            <div className="project_container">
                {
                    Projects_details.map((val) => {
                        return (
                            <Projects key={val.id}
                                title={val.tittle} img={val.img} desc={val.desc} view={val.view} source={val.source}
                            />
                        )
                    })
                }
            </div>

            <div className="price_card">
                <div className="card_container">
                    {
                        Pricing.map((data) => {
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
