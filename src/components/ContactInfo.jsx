import React from "react";
import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";

const ContactInfo = () => {
    const { contactData, setContactData } = useContext(ContactContext);

    return (
        <div>
            <h2>Contact Information</h2>
            <p>Name: {contactData.name}</p>
            <p>Email: {contactData.email}</p>
            <p>Phone: {contactData.phone}</p>
            <p>Address: {contactData.address}</p>
        </div>
    )
}

export default ContactInfo;