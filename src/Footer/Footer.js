import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <p className='footer__title'>Social Media</p>
                <a href='https://www.facebook.com/BarHop-103974381721460'
                    className='facebook'>
                        <FontAwesomeIcon icon={faFacebook} size='2x' />
                    </a>
            </footer>
        )
    }
}

export default Footer