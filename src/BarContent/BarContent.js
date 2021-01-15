import React, { Component } from 'react'
import ApiContext from '../ApiContext'
import Bar from '../Bar/Bar'
import { findBar } from '../bars-helpers'

export default class BarContent extends Component {

    static defaultProps = {
        match: {
            params: {}
        }
    }
    
    static contextType = ApiContext

    render() {
        const { bars=[] } = this.context
        const { barId } = this.props.match.params
        const bar = findBar(bars, barId) || { content: '' }
        return (
            <section className='BarContent'>
                <Bar
                    id={bar.id}
                    name={bar.name}
                />
                <div className='BarContent__content'>
                    {bar.content.split(/\n \r|\n/).map((para, i) =>
                        <p key={i}>{para}</p>
                    )}
                </div>
                <button
                    tag='button'
                    role='link'
                    onClick={() => this.props.history.goBack()}
                >
                    Back
                </button>
                <button>Remove</button>
            </section>
        )
    }
}