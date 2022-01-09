import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/styles.css'

export default function Navbar() {
    return (
        <nav className='navbar-wrapper'>
            <Link to="/">Home</Link>
            <Link to="/links">Links</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}
