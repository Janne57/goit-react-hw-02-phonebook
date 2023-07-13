import { Component } from 'react';
import Contacts from './/Contacts/Contacts.js';
import ContactForm from './ContactForm/ContactForm.js';
import Filter from './Filter/Filter.js';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Jane Fox', number: '123-45-67' },
      { id: 'id-2', name: 'Dmitro Kog', number: '123-45-68' },
      { id: 'id-3', name: 'Alex Bolduin', number: '123-45-69' },
      { id: 'id-4', name: 'Mark Tven', number: '123-45-70' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
  const contact = {
    id: nanoid(),
    name,
    number,
  };

/*1 вариант*/
     if (this.state.contacts.find(contact => 
      contact.name.toLowerCase() === name.toLowerCase())) {
          return alert(`${name} is already in contacts.`);
        } else {
          this.setState(prevState => ({
              contacts: [...prevState.contacts, contact],
            }));};
     
            
  /*2 вариант*/


  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.find(contact => {
  //       if (contact.name.toLowerCase() === name.toLowerCase()) {
  //         return alert(`${name} is already in contacts.`);
  //       }
  //       return [...prevState.contacts, contact];
  //     }),
  //   }));
  //   console.log('this.state.contacts', this.state.contacts);
  //   console.log('contacts.name', this.state.contacts[1].name);
  //   console.log('contacts.name', this.state.contacts.name);
  };
    

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = oldContactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== oldContactId
      ),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContact();
    // const nameContact = contacts.map(contact => contact.name);

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />

        <Contacts
          contacts={visibleContact}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
