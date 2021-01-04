import React, { Component } from 'react'
import { CustomPlaceholder } from 'react-placeholder-image'
import './About.css'

class About extends Component {
    render() {
        return (
            <div className='about'>
                <CustomPlaceholder className='image' width={200} height={200} />
                <p className='description'>This app help you organize your night out with friends by giving you the ability to make a list of bars that around Austin.
                We provide a list of bars with description of the bars and images that would help you decide what bars you want to visit.
                After deciding what bars you want to visit you can add them to a list.</p>
            </div>
        )
    }
}

export default About;