import React from "react";
import css from './contactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => <ul>
        {contacts.map(({ id, name, number }) =>
                <li className={css.list_item} key={id}>
                        <p className={css.name}>{name}: tel. <span className={css.number}>{number}</span></p>
                        <button onClick={()=>onDeleteContact(id)}>🗑</button>
                </li>)}
</ul>
export default ContactList