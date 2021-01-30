import React, { Component } from 'react'
import BarhopForm from '../BarhopForm/BarhopForm'
import ApiContext from '../ApiContext'
import config from '../config'
import './AddList.css'
import CircleButton from '../CircleButton/CircleButton'

export default class AddList extends Component {

    constructor() {
        super();
        this.state = {
            error: null,
            name: '',
            nameValid: '',
            validationMessage: ''
        };
    }

    static contextType = ApiContext;

    isNameValid = e => {
        e.preventDefault();
        if(!this.state.name) {
            this.setState({
                validationMessage: `List name can not be blank`,
                nameValid: false
            });
        } else {
            this.setState({
                validationMessage: '',
                nameValid: false
            },
            this.handleSubmit()
            );
        }
    }

    handleSubmit = e => {
        fetch(`${config.API_ENDPOINT}/lists`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({name: this.state.name}),
        })
            .then(res => {
                if(!res.ok) {
                    throw new Error('Something went wrong');
                }
                return res
            })
            .then(res => res.json())
            .then(list => {
                this.context.addList(list)
                this.props.history.push(`/lists`)
            })
            .catch(error => {
                console.error({ error })
                this.setState({ error: error.message })
            })
    }

    nameChange = letter => {
        this.setState({ name: letter });
    }

    render() {
        return (
            <section className='AddList'>
                <h2>Create List</h2>
                <BarhopForm onSubmit={e => {this.isNameValid(e);
                }}>
                    <section className='field'>
                        <label htmlFor='list-name-input'>
                            Name
                        </label>
                        <input type='text' id='list-name-input' name='list-name' onChange={e => this.nameChange(e.target.value)}/>
                        {!this.state.nameValid && (
                            <section>
                                <p>{this.state.validationMessage}</p>
                            </section>
                        )}
                    </section>
                    <section className='buttons'>
                        <button type='submit'>
                            Create List
                        </button>
                    </section>
                </BarhopForm>
                <CircleButton
                    tag='button'
                    role='link'
                    onClick={() => this.props.history.goBack()}
                    className='AddList__back-button'
                >
                    Back
                </CircleButton>
                {this.state.error && (
                    <div>
                        <p>{this.state.error}</p>
                    </div>
                )}
            </section>
        )
    }

};