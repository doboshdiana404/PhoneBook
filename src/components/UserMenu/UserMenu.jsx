import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operations';

const UserMenu = ({ s }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button className={s.navlink} onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
