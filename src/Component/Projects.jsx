import React from 'react'
import { Link } from 'react-router-dom'
import './project.css';
import { Projects_details } from '../Assets/data'

const Projects = () => {
    return (
        <div className='project_work'>
            <h1 className="project_heading"> Projects </h1>
            <div className="project_container">
                {
                    Projects_details.map((data) => {
                        return (
                            <div className="project_card" key={data.id}>
                                <img src={data.img} alt="project Img" />
                                <h2 className='project_title'>{data.tittle}</h2>
                                <div className="project_details">
                                    <p>{data.desc}</p>
                                    <div className="pro_btn">
                                        <Link to={data.view} className='btn'>View</Link>
                                        <Link to={data.source} className='btn'>Source</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Projects
