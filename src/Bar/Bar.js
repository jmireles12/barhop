import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'

export default class Bar extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = ApiContext;

    render() {
        const { name, id } = this.props
        return (
            <div className='barPage'>
                <h2 className='Bar__title'>
                    <Link to={`/bar/${id}`}>
                        {name}
                    </Link>
                </h2>
            </div>
        )    
    } 
}