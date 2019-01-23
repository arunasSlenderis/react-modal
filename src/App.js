import React, { Component } from 'react';
import ModalWrapper from './components/modal/ModalWrapper';
import AddressForm from './components/AddressForm';

import './App.css';
const theForm = React.createRef();

/**
 * ModalWrapper:
 *  props: 
 *    options: object
 *      modalTitle: string,
 *      buttonValue: string
 * AddressForm:
 *  props: 
 *    ref: ref, 
 *    data?: object
 *      label?: string,
 *      country?: string,
 *      city?: string,
 *      address?: string,
 *      postal_code?: string
 */
class App extends Component {
  render() {
    const options = {
      modalTitle: 'New address',
      buttonValue: 'New address'
    };
    return (
      <div className='App'>
        <ModalWrapper options={options}>
          <AddressForm ref={theForm} />
        </ModalWrapper>
      </div>
    );
  }
}

export default App;
