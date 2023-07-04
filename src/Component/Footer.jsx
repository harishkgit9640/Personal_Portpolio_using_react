import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="logo">HK Solution
            </div>
            <div className="useful_link">
                <li><Link to='/home'> Home</Link></li>
                <li><Link to='/about'> about</Link></li>
                <li><Link to='project'> project</Link></li>
                <li><Link to='/contact'> contact</Link></li>
            </div>
            <div className="address"></div>
        </footer>
    )
}
export default Footer
