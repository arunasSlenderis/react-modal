import React, { Component } from 'react';

import '../../styles/modalLayout.css';

export default class ModalLayout extends Component {
  constructor(props) {
    super(props);

    this.ok = this.ok.bind(this);
    this.close = this.close.bind(this);
  }

  ok() {
    const formValues = this.props.children.ref.current.state;
    this.props.submit(formValues);
  }

  close() {
    this.props.closeModal();
  }

  render() {
    return (
      <div className='modal-layout'>
        <div className='modal-layout-part modal-title'>
          {this.props.title}
          <span className='close-modal' onClick={this.close}>
            x
          </span>
        </div>
        <div className='modal-layout-part modal-main'>
          {this.props.children}
        </div>
        <div className='modal-layout-part modal-controls'>
          <button className='modal-ok' onClick={this.ok}>
            Ok
          </button>
        </div>
      </div>
    );
  }
}
