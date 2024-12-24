import s from './SearchBox.module.css';
export default function SearchBox({ value, onFilter }) {
  return (
    <>
      <label className={s.label}>
        <span>Find contacts by name</span>
        <input
          type="text"
          className={s.input}
          value={value}
          onChange={e => onFilter(e.target.value)}
        />
      </label>
    </>
  );
}
