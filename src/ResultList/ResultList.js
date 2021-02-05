import React, { Component } from 'react'
import ApiContext from '../ApiContext'
import config from '../config';
import './ResultList.css'


export default class ResultList extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        },
        match: {
            params: {}
        }
    }

    static contextType = ApiContext;

    state = {
        name: {
            value: ''
        },
        id: {
            value: ''
        },
        address: {
            value: ''
        },
        rating: {
            value: ''
        },
        price: {
            value: ''
        },
    }

    updateListSelected(list) {
        this.setState({ listChoice: { value: list } });
    }

    handleSubmit = (e) => {
        const bar = {
            name: this.state.name,
            address: this.state.address,
            rating: this.state.rating,
            price: this.state.price,
            listid: this.props.listid
        }
        fetch(`${config.API_ENDPOINT}/bars`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            redirect: 'follow',
            body:JSON.stringify(bar),
        })
        .then(res => {
            if(!res.ok)
                return res.json().then(e => Promise.reject(e))
            /* return res.json */
        })
        .then(bar => {
            this.context.addBar(bar)
        })
        .catch(error => {
            console.error({ error })
            this.setState({ error })
        })
    }

    priceRange() {
        const { price } = this.props
        let dollar = '$'
        if(price > 0) {
            return dollar.repeat(price)
        }
    }

    validateListId() {
        const listid = this.props.listid
        if (!listid) {
            return "Please choose a list to put your bar in";
        } 
      }

    clickMe( name, address, price, rating) {
        this.setState({ name, address, price, rating })
    }

    render() {
        const { name, price, rating, address, listid } = this.props
        console.log(listid)
        return (
            <form onSubmit={e => this.handleSubmit(e)} >
                <section className='resultPage'>
                    <h4 className='Result__title'>
                        {name}  
                    </h4>
                    <p className='address'>{address}</p>
                    <section className='info'>
                        <p className='price'>Price: {this.priceRange()}</p>
                        <p className='rating'>Rating: {rating}</p>   
                    </section>
                    <section className='adding'>
                        <button type='submit'
                            disabled={!listid}
                            onClick={e => this.clickMe(name, address, price, parseInt(rating))}
                        >
                                Add to List
                        </button>  
                    </section>
                </section>
            </form>
        )
    }
}