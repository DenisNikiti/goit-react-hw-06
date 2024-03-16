import PropTypes from "prop-types";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
export default function Contact({ contact: { name, number, id } }) {
  const dispath = useDispatch();
  return (
    <li className={css.listItem}>
      <div>
        <p>{name}</p>

        <p>{number}</p>
      </div>
      <div className={css.container}>
        <button
          type="button"
          className={css.buttonList}
          onClick={() => {
            dispath(deleteContact(id));
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
