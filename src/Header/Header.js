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
            </div>
        )
    }
}

export default Header;