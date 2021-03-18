import React, { Component } from 'react';
import contacts from './contact.json'
import ContactPerson from './ContactPerson';


class ContactList extends Component {
  state = {
    myContacts: contacts.slice(0, 5)
  }
  handleAddRandom = () => {
    let random = Math.floor(Math.random() * contacts.length)
    if (random >= 5) {
      let newContact = contacts[random]
      let imgs = this.state.myContacts.map(elt => elt.pictureUrl)
      if (imgs.indexOf(newContact.pictureUrl) === -1) {
        this.setState({ myContacts: [...this.state.myContacts, newContact] })
      }
    }

  }
  handleSortByName = () => {
    let newList = this.state.myContacts.sort((a, b) => {
      if (a.name.toUpperCase() > b.name.toUpperCase()) {
        return 1
      } else if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return -1
      } else {
        return 0
      }
    })
    this.setState({ myContacts: newList })
  }
  handleSortByPop = () => {
    let newList = this.state.myContacts.sort((a, b) => {
      return b.popularity - a.popularity
    })
    this.setState({ myContacts: newList })
  }
  handleDelete = (contactName) => {
    let myContacts = this.state.myContacts.filter(elt => elt.name !== contactName)
    this.setState({ myContacts });
  }
  render() {
    return (
      <section>
        <div id="buttons">
          <button onClick={this.handleAddRandom}>Add Random Contact</button>
          <button onClick={this.handleSortByName}>Sort by Name</button>
          <button onClick={this.handleSortByPop}>Sort by Popularity</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.myContacts.map((contact, i) =>
              <ContactPerson
                key={i}
                img={contact.pictureUrl}
                name={contact.name}
                popularity={contact.popularity}
                handleDelete={() => this.handleDelete(contact.name)}
              />
            )}
          </tbody>
        </table>
      </section>

    );
  }
}

export default ContactList;
