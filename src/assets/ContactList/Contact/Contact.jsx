import { FaUserLarge } from 'react-icons/fa6';
import { BsTelephoneFill } from 'react-icons/bs';
import s from './Contact.module.css';
export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={s.item}>
      <div className={s.wrap}>
        <p className={s.name}>
          <FaUserLarge type="span" className={s.icon} />
          {name}
        </p>
        <a href="tel:+" className={s.number}>
          <BsTelephoneFill type="span" className={s.icon} />
          {number}
        </a>
      </div>
      <button type="button" className={s.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
