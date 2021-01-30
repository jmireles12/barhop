import React, { Component } from 'react'
import ResultList from '../ResultList/ResultList'
import { getResults } from '../bars-helpers'
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

    render() {
        const { results=[] } = this.context
        return (
            <div className='Search'>
                <div className='header__search'>
                    <h2>Add Bars</h2>
                    <p>Lookup bars to add to your list.</p>
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