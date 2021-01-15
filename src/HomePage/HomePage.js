import React, { Component } from 'react'
import About from '../About/About'
import bar from '../images/bar.jpg'

class HomePage extends Component {
    render() {
        return (
            <div className='HomePage'>
                <img src={bar} alt='black and white bar' />
                <p className='description'>This app help you organize your night out with friends by giving you the ability to make a list of bars.
                We provide a list of bars that are near you with description and images that would help you decide what bars you want to visit.
                After deciding what bars you want to visit you can add them to a list.</p>
            </div>
        )
    }
}

export default HomePage;