import React, { Component } from 'react'
import ResultList from '../ResultList/ResultList'
import './Search.css'
import ApiContext from '../ApiContext'

class Search extends Component {

    static defaultProps = {
        history: {
            goBack: () => { }
        },
        match: {
            params: {}
        }
    }

    static contextType = ApiContext;

    state = { 
        inputValue: {
            value: ''
        }
    }

    handleInputChange = (inputValue) => {
        this.setState({ inputValue: { value: inputValue} })
        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const inputValue = e.target['inputValue'].value
        this.context.addInput(inputValue)
    }

    render() {
        const { results=[] } = this.context
        return (
            <div className='Search'>
                <div className='header__search'>
                    <h2>Add Bars</h2>
                    <p>Lookup bars to add to your list.</p>
                </div>
                <form className='searchBar' onSubmit={this.handleSubmit}>
                    <input type='search'
                        name='inputValue'
                        placeholder='City...'
                        onChange={this.handleInputChange}
                    />
                    <button type='submit'>Submit</button>
                </form>
                <div className='results'>
                    <ul className='search__ul'>
                        {results.map(result => 
                            <li className='search__list' key={result.id}>
                                <ResultList
                                    name={result.name}
                                    address={result.address}
                                    price={result.price}
                                    rating={result.rating}
                                />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Search;