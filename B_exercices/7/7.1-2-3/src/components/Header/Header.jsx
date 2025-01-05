import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({urlLogo, children}) => {
  return (
    <header className="header">
      <img src={urlLogo} alt="logo" className="logo" />
      <div>{children}</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cinema">Cinema</Link>
        <Link to="/movielist">Movie List</Link>
        <Link to="/addmovie">Add Movie</Link>
      </nav>
    </header>
  );
};

export default Header;
