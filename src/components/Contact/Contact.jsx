import s from "./Contact.module.css"
import { FaUserLarge } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
const Contact = ({ name, number, id }) => {
    const dispatch = useDispatch();

    return (
        <div className={s.contact}>
            <ul className={s.contactList}>
                <li className={s.list}>
                    <FaUserLarge className={s.icon} size="18"/>
                    {name}
                </li>
                <li className={s.list}>
                    <FaPhone className={s.icon} size="18"/>
                    {number}
                </li>
            </ul>
            <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>
                Delete
            </button>
        </div>
    )

}

export default Contact;