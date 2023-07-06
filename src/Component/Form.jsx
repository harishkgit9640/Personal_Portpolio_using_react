import React from 'react'
import './contact.css';

const Form = () => {
    return (
        <div className='contact'>
            <form>
                <label htmlFor="Name">Full Name</label>
                <input type="text" />
                <label htmlFor="email">E-mail</label>
                <input type="text" />
                <label htmlFor="subject">Subject</label>
                <input type="text" />
                <label htmlFor="message">Message</label>
                <textarea rows={6} placeholder='Write you message here...' />
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}

export default Form
