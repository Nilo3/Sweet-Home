import logo from '../../../assets/image/logo.svg'
import { Link } from 'react-router-dom';

function Logo  () {
  return (
    <Link to="/">
    <img
      className="hidden md:block cursor-pointer select-none"
      src={logo}
      height={75}
      width={75}
      alt="Logo"
    />
    </Link>
  );
};

export default Logo;