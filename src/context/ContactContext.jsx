import { createContext, useState } from "react";

export const ContactContext = createContext();

const ContactProvider = ({children}) => {
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    })

    return (
        <ContactContext.Provider value={{ contactData, setContactData }}>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactProvider;