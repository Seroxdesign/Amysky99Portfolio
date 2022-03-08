import React from "react"
import { NavLink } from "react-router-dom"
import '../Styles/styles.css'

export default function Nav() {


    return (
        <div className="nav-wrapper">
            <div className="logo-container">

            </div>

            <div className="announcement-container">

            </div>

            <nav className="nav-menu">
                <NavLink exact to="/" className={`menu-item-nav`} activeClassName={'active_nav'}>Home</NavLink>
                <NavLink to="/about" className={`menu-item-nav`} activeClassName={'active_nav'}>About</NavLink>
                <NavLink to="/links" className={`menu-item-nav`} activeClassName={'active_nav'}>Links</NavLink>
                <NavLink to="/spicy-links" className={`menu-item-nav`} activeClassName={'active_nav'}>18+</NavLink>
            </nav>  
        </div>
    )
}
