import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Library App</h1>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/books">Books</Link>
        <br />
      </nav>
    </header>
  );
};

export default Header;
