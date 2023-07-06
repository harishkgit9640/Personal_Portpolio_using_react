import React from 'react'
import { Link } from 'react-router-dom'
import './project.css';

const Projects = (prop) => {
    return (
        <div>
            <div className="project_card">
                <img src={prop.img} alt="project Img" />
                <h2 className='project_title'>{prop.title}</h2>
                <div className="project_details">
                    <p>{prop.desc}</p>
                    <div className="pro_btn">
                        <Link to={prop.view} className='btn'>View</Link>
                        <Link to={prop.source} className='btn'>Source</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
