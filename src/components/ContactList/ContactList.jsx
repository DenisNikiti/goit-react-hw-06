import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { ItemsContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(ItemsContacts);
  const filter = useSelector((state) => state.filter.name);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {visibleContacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  );
}
