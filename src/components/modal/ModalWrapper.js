import React, { Component } from 'react';
import OpenModalButton from './OpenModalButton';
import ModalLayout from './ModalLayout';
import Overlay from './Overlay';

export default class ModalWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = { opened: false };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.submit = this.submit.bind(this);
  }

  openModal() {
    this.setState(() => ({ opened: true }));
  }

  closeModal() {
    this.setState(() => ({ opened: false }));
    this.clearData();
  }

  clearData() {
    this.props.children.ref.current.clear();
  }

  submit(values) {
    console.log(values);
    this.closeModal();
  }

  render() {
    const isOpened = this.state.opened;
    let modalLayout;
    let overlay;

    if (isOpened) {
      modalLayout = (
        <ModalLayout
          submit={this.submit}
          closeModal={this.closeModal}
          title={this.props.options.modalTitle}
        >
          {this.props.children}
        </ModalLayout>
      );
      overlay = <Overlay />;
    }

    return (
      <div>
        <OpenModalButton openModal={this.openModal} value={this.props.options.buttonValue} />
        {modalLayout}
        {overlay}
      </div>
    );
  }
}
