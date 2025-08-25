import { useState, useEffect } from 'react'
import './App.css'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import SearchBox from './components/SearchBox'

function App() {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')

  // Local storage'dan kişileri yükle
  useEffect(() => {
    const savedContacts = localStorage.getItem('phonebook-contacts')
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts))
    }
  }, [])

  // Kişiler değiştiğinde local storage'a kaydet
  useEffect(() => {
    localStorage.setItem('phonebook-contacts', JSON.stringify(contacts))
  }, [contacts])

  // Kişi ekleme fonksiyonu
  const addContact = (newContact) => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )

    if (existingContact) {
      alert(`${newContact.name} is already in contacts.`)
      return false
    }

    const contactWithId = {
      ...newContact,
      id: Date.now().toString()
    }

    setContacts(prevContacts => [...prevContacts, contactWithId])
    return true
  }

  // Kişi silme fonksiyonu
  const deleteContact = (contactId) => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    )
  }

  // Filtrelenmiş kişiler
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="app">
      <h1>Phonebook</h1>

      <ContactForm onAddContact={addContact} />

      <SearchBox value={filter} onChange={setFilter} />

      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  )
}

export default App