import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext'
import CircleButton from '../CircleButton/CircleButton'
import ListTab from '../ListTab/ListTab'
import './Lists.css'

class Lists extends Component {

    constructor(props) {
        super(props);
        this.state = {
            render: false
        }
    }

    static defaultProps = {
        handleDeleteList: () => { },
        onDeleteList: () => { },
        match: {
            params: {}
        }
    }
    static contextType = ApiContext

    render () {
        const { lists=[] } = this.props
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
                                <ListTab
                                    id={list.id}
                                    name={list.name}
                                />
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
