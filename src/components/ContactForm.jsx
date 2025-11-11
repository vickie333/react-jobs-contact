import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContactContext } from '../context/ContactContext';

const ContactForm = () => {
    const navigate = useNavigate();
    const { contactData, setContactData } = useContext(ContactContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setContactData({
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            address: e.target.address.value
        });
        navigate('/contact/info');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" required /><br/>
                <input type="email" name="email" placeholder="Your Email" required /><br/>
                <input type="tel" name="phone" placeholder="Your Phone" required /><br/>
                <textarea name="address" placeholder="Your Address"></textarea><br/>
                <button onClick={() => handleSubmit} type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;