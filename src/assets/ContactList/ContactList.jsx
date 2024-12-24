import Contact from './Contact/Contact';
import s from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={s.list}>
      {contacts.map(user => (
        <li key={user.id}>
          <Contact data={user} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
