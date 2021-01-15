import React, { Component } from 'react'
import config from '../config'
import './Search.css'

class Search extends Component {

    state = {
        results: []
    }

    setResults = results => {
        this.setState({
            results,
            error: null,
        })
    }

    componentDidMount() {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=austin&type=bar&key=AIzaSyB5zppx2H_TdbclNzQJMsEU-iOFP930_vE", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    render() {
        console.log(this.state.results)
        return (
            <div className='Search'>
                <div className='header__search'>
                    <h2>Search Bars</h2>
                    <p>Search for bars to add to your list.</p>
                </div>
                <div className='search__area'>
                    <label htmlFor='search'>
                    Search:
                    {' '}
                    </label>
                    <input type='search' id='search' name='search' placeholder='Search..'/>
                    <button type='submit'>Submit</button>    
                </div>
                <div className='results'>
                    <ul className='search__ul'>
                        <li className='search__list'>
                            <h3>Example Bar</h3>
                            <button type='submit'>Add</button>
                        </li>
                        <li className='search__list'>
                            <h3>Example Bar 1</h3>
                            <button type='submit'>Add</button>
                        </li>
                        <li className='search__list'>
                            <h3>Example Bar 2</h3>
                            <button type='submit'>Add</button>
                        </li>
                        <li className='search__list'>
                            <h3>Example Bar 3</h3>
                            <button type='submit'>Add</button>
                        </li>
                        <li className='search__list'>
                            <h3>Example Bar 4</h3>
                            <button type='submit'>Add</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Search;