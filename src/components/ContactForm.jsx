import { useState } from 'react'

const ContactForm = ({ onAddContact }) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name.trim() && number.trim()) {
            const success = onAddContact({
                name: name.trim(),
                number: number.trim()
            })

            if (success) {
                setName('')
                setNumber('')
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="number">Number:</label>
                <input
                    type="tel"
                    id="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add contact</button>
        </form>
    )
}

export default ContactForm