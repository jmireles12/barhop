import React, { Component } from 'react'
import ApiContext from '../ApiContext'
import ValidationError from '../ValidationError'
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
        listid: '',
        showButton: false
    }

    updateListSelected(list) {
        this.setState({ listChoice: { value: list } });
    }

    handleChange = (e) => {
        this.setState({ listid: e.target.value, showButton: true })
    }

    handleSubmit = (e) => {
        console.log('hello')
        const bar = {
            name: this.state.name,
            address: this.state.address,
            rating: this.state.rating,
            price: this.state.price,
            listid: e.target['result-list-id'].value
        }
        this.setState({ error: null })

        fetch(`${config.API_ENDPOINT}/bars`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(bar),
        })
        .then(res => {
            if(!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json
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
        const listid = this.state.listid.value;
        if (!listid) {
            return "Please choose a list to put your bar in";
        } 
      }

    clickMe( name, address, price, rating) {
        this.setState({ name, address, price, rating })
    }

    render() {
        const listError = this.validateListId();
        const { lists=[] } = this.context
        const { name, price, rating, address } = this.props
        return (
            <form onSubmit={this.handleSubmit}>
            <div className='ResultList__error' role='alert'>
                {this.state.error && <ValidationError message={listError} />}
            </div>
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
                    <button type='submit' disabled={!this.state.listid} onClick={e => this.clickMe(name, address, price, parseInt(rating))}>Add to List</button>
                    <select name='result-list-id' defaultValue='' onChange={this.handleChange}>
                        <option value=''>...</option>
                        {lists.map(list =>
                            <option key={list.id} value={list.id} /* onChange={this.isSubmitEnabled()} */>
                                {list.name}
                            </option>)}
                    </select>    
                </section>
            </section>
            </form>
        )
    }
}