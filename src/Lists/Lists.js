import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import BarList from '../BarList/BarList'
import ApiContext from '../ApiContext'
import Bar from '../Bar/Bar'
import { countBarsForList } from '../bars-helpers'
import './Lists.css'

class Lists extends Component {

    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = ApiContext
    
    renderBarLists() {
        return (
          <>
              {['/list/:listId'].map(path =>
                  <Route
                    exact
                    key={path}
                    path={path}
                    component={BarList}
                  />
              )}
              <Route
                path='/bar/:barId'
                component={Bar}
              />
          </>
        )
    }

    render () {
        const { lists=[], bars=[] } = this.context
        return (
            <div className='lists'>
                <div className='header__lists'>
                    <h2>Lists</h2>
                    <p>Here you can look through your lists. You can delete and edit your lists
                    </p>
                </div>
                <div className='lists__list'>
                    <ul>
                        {lists.map(list =>
                            <li key={list.id}>
                                <Link
                                    className='list-link'
                                    to={`/list/${list.id}`}
                                >
                                    <span className='list-num-bars'>
                                        {countBarsForList(bars, list.id)}
                                    </span>
                                    {list.name}
                                </Link>
                                <button className='delete__btn'>Delete</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>    
        )    
    }
}

export default Lists
