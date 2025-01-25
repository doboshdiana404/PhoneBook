import { FaUserLarge } from 'react-icons/fa6';
import { BsTelephoneFill } from 'react-icons/bs';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact, editContactThunk } from '../../../redux/contactsOps';
import { MdOutlineEdit } from 'react-icons/md';
export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

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
      <div className={s.btnWrap}>
        <button
          type="button"
          className={s.btn}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
        <button
          className={s.editBtn}
          type="button"
          onClick={() =>
            dispatch(
              editContactThunk({
                id,
                name: prompt('Enter new name: ') ?? name,
                number,
              })
            )
          }
        >
          <MdOutlineEdit />
          Edit
        </button>
      </div>
    </div>
  );
}
