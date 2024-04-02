import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="">
      <ul className="nav">
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
