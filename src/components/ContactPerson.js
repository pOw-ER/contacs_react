import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ContactPerson = (props) => {
  return (
    <tr>
      <td><img src={props.img} alt="" /></td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
      <td><button class="delete-button" onClick={props.handleDelete}><FontAwesomeIcon icon={faTrash} /></button></td>
    </tr>
  );
}

export default ContactPerson;
