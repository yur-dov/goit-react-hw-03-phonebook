import React, {Component} from "react";
import { nanoid } from "nanoid";
import css from './contactForm.module.css'

export default class ContactForm extends Component {

state = {
  contacts: [],
  name: '',
  number: ''
    }

handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
        [name]: value,
    })
};

    handleSubmit = event => {
        event.preventDefault();
        const dataContacts = {id: nanoid(4), name: this.state.name, number: this.state.number};
        this.props.addContact(dataContacts)
        this.reset();
    };

reset = () => {
    this.setState({
    name: '',
    number: ''
    })
}

render() {
    return (
    <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label}>
            Name:
            <input
            className={css.input}
                type="text"
                onChange={this.handleChange}
                name="name"
                value={this.state.name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
        </label>
        <label className={css.label}>
            Number:
            <input
            className={css.input}
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
            </label>
        <button className={css.btn_add} type="submit">+Add</button>
    </form>
    )
}
}