import ContactForm from './Contact/ContactForm'
import ContactList from './ContactList/ContactList'
import FilterForm from './Filter/Filter'
import css from './app.module.css'

import React, {Component} from "react";

export default class App extends Component {
state = {
  contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
             {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
             {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
             {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
filter: '',
}
  
  addContact = (newContact) => {
    const contactNames = this.state.contacts.map(contact => contact.name);

    if(contactNames.includes(newContact.name)){
      alert(`${newContact.name} is already in contacts.`)
    }else {
      this.setState(({contacts}) => ({
        contacts: [newContact, ...contacts]
      }))
    }
  }

  changeFilter = event => {
    this.setState({
      filter: event.currentTarget.value
    })
  }
 
  deleteContactCard = (cardId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contsct => contsct.id!== cardId)
    }))
  }
  getVisiblCard=()=>{
  const { contacts, filter } = this.state;
  const normalizedFilter = filter.toLowerCase();
  
  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }

  componentDidMount() {
    const parsContact = JSON.parse(localStorage.getItem('contacts'));
    if (parsContact) {
      this.setState({
      contacts: parsContact
    })
    }
    
}

  componentDidUpdate(prevProps, prevState) {
  
    if (this.state.contacts !== prevState) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
}

  render() {
 
    const visibleCard = this.getVisiblCard();
    return (
      <div className={css.container}>
        <h1 className={css.title}>PhoneBook</h1>
        <div className={css.add_contact}>
          <h2 className={css.title_add}>Add Contact</h2>
          <ContactForm addContact={this.addContact} />
          <h2 className={css.title_search}>Search contact</h2>
          <FilterForm value={this.state.filter} onChange={this.changeFilter} />
        </div>
        <div className={css.contacts}>
          <h2 className={css.title_contact}>Contacts</h2>
          <ContactList contacts={visibleCard} onDeleteContact={this.deleteContactCard} />
        
        </div>
      </div>
    );
  }
};
 