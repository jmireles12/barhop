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
 
    handleChange = (e) => {
        this.setState({ listid: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const inputValue = e.target['inputValue'].value
        this.context.addInput(inputValue)
    }

    render() {
        const { results=[], lists=[] } = this.context
        return (
            <div className='Search'>
                <div className='header__search'>
                    <h2>Add Bars</h2>
                    <p>Lookup bars to add to your list.</p>
                    <select name='result-list-id' onChange={this.handleChange}>
                        <option value=''>...</option>
                        {lists.map(list =>
                            <option key={list.id} value={list.id}>
                                {list.name}
                            </option>)}
                    </select>  
                </div>
                <div className='results'>
                    <ul className='search__ul'>
                        {results.map(result => 
                            <li className='search__list' key={result.id}>
                                <ResultList
                                    name={result.name}
                                    address={result.address}
                                    price={result.price}
                                    rating={result.rating}
                                    listid={this.state.listid}
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