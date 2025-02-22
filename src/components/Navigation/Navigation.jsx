import { NavLink } from 'react-router-dom';

const Navigation = ({ buildLinkClass, navstyle, isLoggedIn }) => {
  return (
    <div className={navstyle}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={buildLinkClass}>
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
