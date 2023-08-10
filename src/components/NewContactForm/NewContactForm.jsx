import React from 'react'

const NewContactForm = () => {
    return (
        <section id="contactForm">
            <h2>Add Contact</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required="" />
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required="" />
                <button type="submit">Add Contact</button>
            </form>
        </section>
    )
}

export default NewContactForm