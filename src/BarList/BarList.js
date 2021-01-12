import React, { Component } from 'react'
import { getBarsForList } from '../bars-helpers'
import Bar from '../Bar/Bar'
import { Link, Route } from 'react-router-dom'
import ApiContext from '../ApiContext';

class BarList extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
    }

    static contextType = ApiContext;

    render() {
        const { listId } = this.props.match.params
        const { bars=[] } = this.context
        const barsForList = getBarsForList(bars, listId)
        return (
            <section className='BarList'>
                <ul>
                    {barsForList.map(bar =>
                        <li key={bar.id}>
                            <Bar
                                name={bar.name}
                                id={bar.id}
                            >
                            {bar.name}
                            </Bar>
                        </li>
                    )}
                </ul>
            </section>
        )
    }
}

export default BarList;