import { Component } from 'react';
import React from 'react';
import css from './ElementContactForm.module.css';

class ElementContactForm extends Component {
  state = {
    number: '',
  };

  reneder() {
    return (
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={this.state.number}
        onChange={this.handleChange}
      />
    );
  }
}
