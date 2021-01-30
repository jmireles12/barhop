import React from 'react'
import './BarhopForm.css'

export default function BarhopForm(props) {
    const { className, ...otherProps } = props
    return (
        <form
        className={['Barhop-form', className].join(' ')}
        action='#'
        {...otherProps}
    />
    )
}