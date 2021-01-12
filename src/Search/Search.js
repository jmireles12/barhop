import React, { Component } from 'react'
import './Search.css'

class Search extends Component {

    importAll(r) {
        let images = {};
         r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
    }

    render() {
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