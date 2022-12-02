import React, { useState } from 'react';
import "./Header.css"
import logo from "../Media/logo.png"
import "./Common.css"
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [activemenu, setActivemenu] = useState("home");
    console.log(activemenu);
    return (

        <nav>
            <div className='navstyle site-max-width'>
                <NavLink to="/"><img src={logo} alt="" className='logo' /></NavLink>
                <div>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'activemenu' : 'inactive')} >HOME</NavLink>
                    <NavLink to="/catalogue" className={({ isActive }) => (isActive ? 'activemenu' : 'inactive')}>CATALOGUE</NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'activemenu' : 'inactive')}>ABOUT</NavLink>
                    <NavLink to="news" className={({ isActive }) => (isActive ? 'activemenu' : 'inactive')}>NEWS</NavLink>
                    <NavLink to="/more" className={({ isActive }) => (isActive ? 'activemenu' : 'inactive')}>MORE</NavLink>
                </div>
            </div>

        </nav>
    );
};

export default Header;