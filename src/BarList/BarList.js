import React, { Component } from 'react'
import { getBarsForList } from '../bars-helpers'
import Bar from '../Bar/Bar'
import ApiContext from '../ApiContext';

class BarList extends Component {
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
                            <button>Remove</button>
                        </li>
                    )}
                </ul>
                <button
                    tag='button'
                    role='link'
                    onClick={() => this.props.history.goBack()}
                >
                    Back
                </button>
            </section>
        )
    }
}

export default BarList;