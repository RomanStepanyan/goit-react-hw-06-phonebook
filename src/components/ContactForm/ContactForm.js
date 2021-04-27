import { Component } from 'react';
import { connect } from 'react-redux';
import { onAdd } from '../../Redux/Actions';
import s from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = INITIAL_STATE;

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => this.setState(INITIAL_STATE);

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          placeholder="Enter name"
          value={name}
          onChange={this.handleChangeForm}
        />

        <input
          type="tel"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          placeholder="Enter phone number"
          value={number}
          onChange={this.handleChangeForm}
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(onAdd(text)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
