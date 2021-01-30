import React, { Component } from 'react';
import './Contact.css'

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <h2>Contact Us</h2>
                    <p>Leave us a message:</p>
                </div>
                <div className="row">
                    <div className="column">
                        <form action="/action_page.php">
                            <label htmlFor="name">Name</label>
                            <input className='Contact-input' type="text" id="name" name="name" placeholder="Your name.."/>
                            <label htmlFor="lname">Last Name</label>
                            <input className='Contact-input-email' type="email" id="email" name="email" placeholder="Your email.."/>
                            <label htmlFor="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                            <input className='Contact-input-submit' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact