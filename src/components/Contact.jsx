const Contact = ({ contact, onDelete }) => {
    return (
        <li className="contact-item">
            <div className="contact-info">
                <span className="contact-name">{contact.name}</span>
                <span className="contact-number">{contact.number}</span>
            </div>
            <button
                className="delete-button"
                onClick={() => onDelete(contact.id)}
            >
                Delete
            </button>
        </li>
    )
}

export default Contact