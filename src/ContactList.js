import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ContactList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            query: ""
        }
    }

    updateQuery(query){
        this.setState(()=>({
            query: query.trim()
        }))
    }
    showAllContacts(){
        this.updateQuery("")
    }
    
    render() {

        const {query}= this.state
        const {contacts, removeContact}= this.props
        const contactsToShow= query===""?contacts: contacts.filter((c)=>{
            return c.name.toLowerCase().includes(query.toLowerCase())
        })

        return (
            <div className="list-contacts">
            
                <div className="searching">
                    <input 
                    className="search-contacts"
                    placeholder="Search Contact"
                    type="text"
                    value={query}
                    onChange={(event)=>this.updateQuery(event.target.value)}/>

            <Link
            to='/create'
            className="contact-add"
            >Add</Link>          

                    
                </div>
                
                {contactsToShow.length !==contacts.length &&(
                    <div className="showing-contacts">
                    <span>Now showing {contactsToShow.length} of {contacts.length} contacts </span>
                    <button onClick={()=>this.showAllContacts()}>Show all Contacts</button>
                    </div>
                )}
                <ol className="contact-list">
                    {contactsToShow.map((contact)=>(
                        <li className="contact-list-item" key={contact.id}>
                        <div className="contact-avatar" style={{
                            backgroundImage: `url(${contact.avatarURL})`
                        }}>
                        </div>

                        <div className="contact-details">
                            <p>{contact.name}</p>
                            <p>{`@${contact.handle}`}</p>                
                        </div>
                        <button onClick={()=>removeContact(contact)} className="contact-remove"></button>
                        
                    </li>
                    
                    ))}
                </ol>
            </div>            
        )
    }
}

export default ContactList




