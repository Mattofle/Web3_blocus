import logo from './LOGO_HE_VINCI.png';

const Header = (props) => {
  return (
    <div>
      <img src={logo} alt="" />
      <h1>{props.course}</h1>
    </div>
  );
};

export default Header;
