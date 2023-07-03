import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <NavLink to='/'> HK Solution </NavLink>
                <ul>
                    <li>
                        <NavLink to='/'> Home </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'> About </NavLink>
                    </li>
                    <li>
                        <NavLink to='/service'> Service </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'> Contact </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
