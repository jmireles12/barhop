import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'
import About from './About'

configure({adapter: new Adapter()});
describe(`About component`, () => {
    it('renders the complete about', () => {
        const wrapper = shallow(<About />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})