import React from 'react'
import Hero2 from '../Component/Hero2'
import Card from '../Component/Card'
import "../Component/cardStyle.css";
import Projects from '../Component/Projects';
const Service = () => {
    return (
        <div>
            <Hero2 heading="Our Service" sub_heading='This is Our Service' />
            <Projects />
            <Card />
        </div>
    )
}

export default Service
