import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import s from '../Header/Header.module.css';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { useEffect, useRef, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const menuRef = useRef(null); // Додаємо ref для мобільного меню

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.navlink, isActive && s.active);
  };
  const buildLinkClassTwo = ({ isActive }) => {
    return clsx(s.navMobileLink, isActive && s.active);
  };

  const user = useSelector(selectUser);
  // Додаємо обробник кліку поза меню
  const handleClickOutside = event => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false); // Закриваємо меню, якщо клікнули поза
    }
  };

  useEffect(() => {
    // Додаємо подію на кліки по всьому документу
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Очищаємо подію, коли компонент буде розмонтовуватися
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.pointerEvents = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.pointerEvents = 'all';
    }
  }, [isOpen]);
  return (
    <div>
      <nav className={s.navlist}>
        <div className={s.desktopMenu}>
          {user && isLoggedIn && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                style={{ marginRight: '10px', gap: '0' }}
                className={s.navlist}
              >
                {' '}
                <FaUserCircle size={24} style={{ marginRight: '8px' }} />
                Welcome, {user.name}
              </span>
            </motion.div>
          )}
          <Navigation
            buildLinkClass={buildLinkClass}
            navstyle={s.navlist}
            isLoggedIn={isLoggedIn}
          />

          {isLoggedIn ? (
            <UserMenu s={s} />
          ) : (
            <>
              <AuthNav buildLinkClass={buildLinkClass} navstyle={s.navlist} />
            </>
          )}
        </div>
        <button
          style={{ pointerEvents: 'auto' }}
          className={s.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖' : '☰'}
        </button>
        <ul
          style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
          className={`${s.mobileMenu} ${isOpen ? s.open : ''}`}
          onClick={() => setIsOpen(false)}
          ref={menuRef}
        >
          {user && isLoggedIn && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                style={{
                  marginRight: '10px',
                  gap: '0',
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  color: 'black',
                  borderRadius: '50%',
                  padding: '5px 40px',
                }}
                className={s.navlist}
              >
                {' '}
                <FaUserCircle size={24} style={{ marginRight: '8px' }} />
                Welcome, {user.name}
              </span>
            </motion.div>
          )}
          <Navigation
            buildLinkClass={buildLinkClassTwo}
            navstyle={s.navlist}
            style={{}}
            isLoggedIn={isLoggedIn}
          />

          {isLoggedIn ? (
            <UserMenu s={s} />
          ) : (
            <>
              <AuthNav
                buildLinkClass={buildLinkClassTwo}
                navstyle={s.navlist}
              />
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default AppBar;
