import React from 'react'
import Input from './Input';

function Form(props) {

  const drop = e => {
    e.preventDefault();
    const input_id = e.dataTransfer.getData('input_id');

    const input = document.getElementById(input_id);
    input.style.display = 'block';

    e.target.appendChild(input);
  }
  const dropDestiny = e => {
    e.preventDefault();
  }
  return (
    <div id='{props.id}'
    onDrop={drop}
    onDragOver={dropDestiny}
    className={props.className}>
      {props.children}
    </div>
  )
}

export default Form