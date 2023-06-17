import logo from '../../../assets/image/logo.svg'

function Logo  () {
  return (
    <img
      className="hidden md:block cursor-pointer"
      src={logo}
      height={75}
      width={75}
      alt="Logo"
    />
  );
};

export default Logo;