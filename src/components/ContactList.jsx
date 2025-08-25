import Contact from './Contact'

const ContactList = ({ contacts, onDeleteContact }) => {
    if (contacts.length === 0) {
        return <p>No contacts found.</p>
    }

    return (
        <ul className="contact-list">
            {contacts.map(contact => (
                <Contact
                    key={contact.id}
                    contact={contact}
                    onDelete={onDeleteContact}
                />
            ))}
        </ul>
    )
}

export default ContactList