
import React, { useState } from "react"
import { Link } from 'react-router-dom'

import '../Styles/styles.css'

export default function HamBurgerNav() {
    
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleNav = () => {
        setNavbarOpen(prev => !prev)
    }

    return (
        <>
            <button className='nav-btn' onClick={handleNav}>
                <img className='nav-icon' src="https://i.imgur.com/NvGVh0S.png"></img>
            </button>

            <div className={`nav-menu-pull ${navbarOpen ? "open-menu" : ""}`}>
                <div className='nav-exit' onClick={handleNav}> <h1 className="exit-btn">X</h1> </div>

                <nav className="nav-menu">
                    <Link to="/" className={`menu-item-nav ${navbarOpen? '' : 'invisible'}`}>Home</Link>
                    <Link to="/links" className={`menu-item-nav ${navbarOpen? '' : 'invisible'}`}>Links</Link>
                    <Link to="/about" className={`menu-item-nav ${navbarOpen? '' : 'invisible'}`}>About</Link>
                </nav>  
            </div>
        </>
    )
}
