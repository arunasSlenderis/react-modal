import React from 'react';

export default function OpenModalButton(props) {
  return <button onClick={props.openModal}>{props.value}</button>;
}
