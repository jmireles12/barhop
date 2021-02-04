import React, { Component } from 'react'
import ApiContext from '../ApiContext'
import config from '../config';
import './Bar.css'

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
                <section className='Bar__title'>
                    <h2>
                        {name}
                    </h2>
                    <section className='fields'>
                        <p className='address'>{address}</p>
                        <p className='price'>Price: {price}</p>
                        <p className='rating'>Rating: {rating}</p>
                    </section>
                    
                    <button
                        className='Bar__delete'
                        type='button'
                        onClick={() => { this.handleClickDelete(id) }}
                    >
                        Delete
                    </button>
                </section>
            </div>
        )    
    } 
}