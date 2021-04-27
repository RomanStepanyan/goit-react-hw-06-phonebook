import { Component } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import FilterContacts from './components/FilterContacts/FilterContacts';
import s from './App.module.css';

export default class App extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  // handleAddContact = newContact =>
  //   this.setState(({ contacts }) => ({
  //     contacts: [...contacts, newContact],
  //   }));

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   const { name, phone } = this.state;
  //   const { onAdd } = this.props;
  //   const isValidatedForm = this.validateForm();
  //   if (!isValidatedForm) return;
  //   onAdd({ id: uuid(), name, phone });
  //   this.props.onSubmit(this.state);
  //   this.resetForm();
  // };

  // handleRemoveContacts = id =>
  //   this.setState(({ contacts }) => ({
  //     contacts: contacts.filter(contact => contact.id !== id),
  //   }));

  // handleFilterChange = filter => this.setState({ filter });

  // getVisibleContacts = () => {
  //   const { contacts, filter } = this.state;
  //   return contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase()),
  //   );
  // };

  // componentDidMount() {
  //   if (localStorage.getItem('contacts') !== null) {
  //     this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
  //   }
  // }

  // componentDidUpdate(prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  render() {
    // const { filter } = this.state;
    // const visibleContacts = this.getVisibleContacts();
    return (
      <div className={s.container}>
        <h2 className={s.title}>Contact form</h2>

        <ContactForm
        // onAdd={this.handleAddContact}
        // onCheckUnique={this.handleCheckUniqueName}
        />

        <h2 className={s.title}>Contact list</h2>

        <FilterContacts
        // filter={filter} onChange={this.handleFilterChange}
        />

        <ContactsList
        // items={}
        // contacts={visibleContacts}
        // onRemove={this.handleRemoveContacts}
        />
      </div>
    );
  }
}
