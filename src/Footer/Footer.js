import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <ul className='footer_links'>
                    <li><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></li>
                    <li><Link to='/Bars' style={{ textDecoration: 'none' }}>Bars</Link></li>
                    <li><Link to='/List' style={{ textDecoration: 'none' }}>List</Link></li>
                    <li><Link to='/About' style={{ textDecoration: 'none' }}>About</Link></li>
                    <li><Link to='/Contact' style={{ textDecoration: 'none' }}>Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default Footer