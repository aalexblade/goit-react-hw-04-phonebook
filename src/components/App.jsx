import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { PhoneBookWrapper } from "./ContactForm/ContactForm.styled";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
     if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(_, prevState) { 
    if (
      prevState.contacts.lenght !== 0 &&
      prevState.contacts.lenght !== this.state.contacts.length
    ) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;
    let newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.find(contact => contact.name === name)) {
      return window.alert(`${name} is already in contacts.`);
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLocaleLowerCase();

    const filterContacts = contacts.filter(contact => {

      return contact.name.toLocaleLowerCase().includes(normalizeFilter);
    });

    return (
      <PhoneBookWrapper>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.changeFilter} />
        <ContactList
        contacts={filterContacts}
        onClick={this.handleDeleteContact}
        />
      </PhoneBookWrapper>
    );
  };
}