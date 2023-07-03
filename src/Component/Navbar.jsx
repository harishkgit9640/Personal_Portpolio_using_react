import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './navStyle.css';
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
    const [click, setClick] = useState(false);
    const hadleClick = () => { setClick(!click) };
    return (
        <div>
            <div className="navbar">
                <div className="brand">
                    <NavLink to='/'> HK Solution </NavLink>
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
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
                <div className="hamburger" onClick={hadleClick}>
                    {
                        click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
