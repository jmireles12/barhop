import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext'
import config from '../config'
import { countBarsForList } from '../bars-helpers'
import './ListTab.css'

export default class ListTab extends Component {
    
    static defaultProps = {
        handleDeleteList: () => { },
        onDeleteList: () => { },
        match: {
            params: {}
        }
    }
    static contextType = ApiContext

    handleDeleteList = e => {
        const listid = this.props.id
        fetch(`${config.API_ENDPOINT}/lists/` + listid, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(listid),
        })
            .then(res => {
                if(!res.ok) {
                    throw new Error(res.statusText)
                }
            })
            .then(res => {
                this.context.deleteList(listid)
                this.props.onDeleteList(listid)
                
            })
            .catch(error => {
                console.error(error)
            })
    }
    
    render() {
        const { bars=[] } = this.context
        const { name, id } = this.props
        return (
            <div className='ListTab'>
                <span className='list-num-bars'>
                    Num of Bars: {countBarsForList(bars, id)}
                </span>
                <h2 className='List__title'>
                    <Link to={`/list/${id}`}>
                        {name}
                    </Link>
                </h2>
                <button
                    className='ListTab__delete'
                    type='button'
                    onClick={() => { this.handleDeleteList(id) }}
                >
                    Delete
                </button>
            </div>
        )
    }
}

