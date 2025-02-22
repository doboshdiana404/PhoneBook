import { Link } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import LoginForm from '../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className="bodyLogin">
      <Link to="/">
        <button className="backBtn">
          <MdArrowBackIos />
        </button>
      </Link>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
