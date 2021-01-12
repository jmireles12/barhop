import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1 className='title'>
                    <Link to='/' style={{ textDecoration: 'none' }}>BarHop</Link>
                </h1>
                <ul className='header_links' id="nav">
                    <li className='header_li'><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></li>
                    <li className='header_li'><Link to='/search' style={{ textDecoration: 'none' }}>Search</Link></li>
                    <li className='header_li'><Link to='/lists' style={{ textDecoration: 'none' }}>Lists</Link></li>
                    <li className='header_li'><Link to='/about' style={{ textDecoration: 'none' }}>About</Link></li>
                    <li className='header_li'><Link to='/contact' style={{ textDecoration: 'none' }}>Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header;