import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import BarList from '../BarList/BarList'
import ApiContext from '../ApiContext'
import Bar from '../Bar/Bar'
import CircleButton from '../CircleButton/CircleButton'
import config from '../config'
import { countBarsForList } from '../bars-helpers'
import './Lists.css'

class Lists extends Component {

    static defaultProps = {
        handleDeleteList: () => { },
        onDeleteList: () => { },
        match: {
            params: {}
        }
    }

    static contextType = ApiContext

    handleDeleteList = e => {
        const listid = this.props.lists.id
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
                <div>
                    <ul className='lists__ul'>
                        {lists.map(list =>
                            <li key={list.id}  className='lists__list'>
                                <Link
                                    className='list-link'
                                    to={`/list/${list.id}`}
                                >
                                    {list.name}
                                </Link>
                                <span className='list-num-bars'>
                                    Num of Bars: {countBarsForList(bars, list.id)}
                                </span>
                                <button
                                    className='delete__list'
                                    type='button'
                                    onClick={() => { this.handleDeleteList(list.id) }}
                                >
                                    Delete
                                </button>
                            </li>
                        )}
                    </ul>
                    <CircleButton
                        tag={Link}
                        to='/add-list'
                        type='button'
                    >
                        Create List
                    </CircleButton>
                </div>
            </div>    
        )    
    }
}

export default Lists
