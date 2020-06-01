import React, { Component } from 'react'
import ContactList from './ContactList'
import PropTypes from 'prop-types'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'
import { Route } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      contacts: []
    }
  }
  componentDidMount(){
    ContactsAPI.getAll()
    .then((contacts)=>{
      this.setState(()=>({
        contacts
      }))
    })
  }
  deleteContact=(contact)=>{
    this.setState((currentState)=>({
contacts: currentState.contacts.filter((c)=> c.id !== contact.id
)
  }))
  ContactsAPI.remove(contact)
}
createContact=(contact)=>{
  ContactsAPI.create(contact)
    .then((contact=>{
      this.setState((currentState)=>({
      contacts: currentState.contacts.concat(contact)
    }))
  }))
}
  render() {
    return (
      <div>
        <Route exact path="/" render={()=>(
          <ContactList contacts={this.state.contacts}
          removeContact={this.deleteContact}
        />
        )}
      />
      <Route  path="/create" render={({ history })=>(
          <CreateContact
          onCreateContact={(contact)=>{
            this.createContact(contact)
            history.push('/')
          }}/>
        )}
      />
      
      </div>
    )
  }
}

ContactList.propTypes ={
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired
}

export default App
