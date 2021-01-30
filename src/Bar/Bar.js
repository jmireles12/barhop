import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import config from '../config';

export default class Bar extends Component {
    static defaultProps = {
        handleClickDelete: () => { },
        onDeleteBar: () => { },
        match: {
            params: {}
        }
    }

    static contextType = ApiContext;

    handleClickDelete = e => {
        const barId = this.props.id
        fetch(`${config.API_ENDPOINT}/bars/` + barId, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(barId),
        })
            .then(res => {
                if(!res.ok) {
                    throw new Error(res.statusText)
                }
            })
            .then(res => {
                this.context.deleteBar(barId)
                this.props.onDeleteBar(barId)
            })
            .catch(error => {
                console.error(error)
            })
    }

    render() {
        const { name, id, address, price, rating } = this.props
        return (
            <div className='barPage'>
                <h2 className='Bar__title'>
                    <Link to={`/bar/${id}`}>
                        {name}
                    </Link>
                    <p>{address}</p>
                    <p>{price}</p>
                    <p>{rating}</p>
                    <button
                        className='Bar__delete'
                        type='button'
                        onClick={() => { this.handleClickDelete(id) }}
                    >
                        Delete
                    </button>
                </h2>
            </div>
        )    
    } 
}