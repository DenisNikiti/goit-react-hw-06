import ContactForm from "./componets/ContactForm/ContactForm ";
import SearchBox from "./componets/SearchBox/SearchBox";
import ContactList from "./componets/ContactList/ContactList";

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
