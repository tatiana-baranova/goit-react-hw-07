import s from "./ContactsList.module.css"
import Contact from "../Contact/Contact"
import { useSelector } from "react-redux"

const ContactList = () => {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filters.name.toLowerCase());
    const visibleContactsList = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
    );



    return (
        <ul className={s.container}>
            {visibleContactsList.map(contact => (
                <li className={s.contactsList} key={contact.id}>
                    <Contact
                        id={contact.id}
                        name={contact.name}
                        number={contact.number} />
                </li>
            ))}
        </ul>
    )
}

export default ContactList;