import React, { Component } from 'react';

import '../styles/addressForm.css';

const DEFAULT_STATE = {
  label: '',
  country: 'lt',
  city: '',
  address: '',
  postal_code: ''
};

export default class AddressForm extends Component {
  constructor(props) {
    super(props);

    this.state = DEFAULT_STATE;

    if (props.data) {
      this.state = { ...DEFAULT_STATE, ...props.data };
    }

    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(e) {
    e.persist();
    this.setState(() => ({ [e.target.name]: e.target.value }));
  }

  clear() {
    this.setState(prevState => ({
      ...prevState,
      DEFAULT_STATE
    }));
  }

  render() {
    return (
      <form className='address-form'>
        <div className='row form-control-group'>
          <label htmlFor='label'>Label</label>
          <input
            className='formControl'
            id='label'
            type='text'
            name='label'
            value={this.state.label}
            onChange={this.onValueChange}
          />
        </div>

        <div className='row'>
          <div className='form-control-group'>
            <label htmlFor='country'>Country</label>
            <select
              className='formControl'
              name='country'
              id='country'
              value={this.state.country}
              onChange={this.onValueChange}
            >
              <option value='lt'>Lithuania</option>
            </select>
          </div>

          <div className='form-control-group'>
            <label htmlFor='city'>City</label>
            <input
              className='formControl'
              id='city'
              type='text'
              name='city'
              value={this.state.city}
              onChange={this.onValueChange}
            />
          </div>

          <div className='form-control-group'>
            <label htmlFor='address'>Address</label>
            <input
              className='formControl'
              id='address'
              type='text'
              name='address'
              value={this.state.address}
              onChange={this.onValueChange}
            />
          </div>

          <div className='form-control-group'>
            <label htmlFor='postal_code'>Postal code</label>
            <input
              className='formControl'
              id='postal_code'
              type='text'
              name='postal_code'
              value={this.state.postal_code}
              onChange={this.onValueChange}
            />
          </div>
        </div>
      </form>
    );
  }
}
