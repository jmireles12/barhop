import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import About from './About'

describe(`About component`, () => {
    it('renders the complete about', () => {
        const wrapper = shallow(<About />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})