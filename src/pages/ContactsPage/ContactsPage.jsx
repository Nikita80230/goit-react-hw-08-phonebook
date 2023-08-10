import React from 'react';

export const ContactsPage = () => {
    return (
        <div>
            <section id="contactList">
                <h2>Contact List</h2>
                <ul className="contactListUl">
                    <li className="contactItem">
                        <p className="contactName">John Doe</p>
                        <p className="contactPhone">123-456-7890</p>
                        <button className="deleteButton">Delete</button>
                    </li>
                </ul>
            </section>
        </div>

    );
};
