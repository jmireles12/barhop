import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Bar from './Bar'

describe(`Bar component`, () => {
    const props = {
        id: 'a',
        name: 'test-class-name',
    }

    it('renders a .Bar by default', () => {
        const wrapper = shallow(<Bar />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders the Bar given props', () => {
        const wrapper = shallow(<Bar {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})