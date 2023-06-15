const Avatar = ({ src }) => {
  return (
    <img
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={src || 'https://pic.onlinewebfonts.com/svg/img_569204.png'}
    />
  );
};

export default Avatar;