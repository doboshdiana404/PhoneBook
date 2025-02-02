import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import s from '../Header/Header.module.css';

import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { logoutThunk } from '../../redux/auth/operations';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.navlink, isActive && s.active);
  };
  return (
    <div>
      <nav className={s.navlist}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={buildLinkClass}>
          Contacts
        </NavLink>

        {isLoggedIn ? (
          <button className={s.navlink} onClick={() => dispatch(logoutThunk())}>
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/register" className={buildLinkClass}>
              Register
            </NavLink>
            <NavLink to="/login" className={buildLinkClass}>
              Login
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default AppBar;
