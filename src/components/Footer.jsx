import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      <p>Copyright &copy; 2023</p>
      {location.pathname === "/about" ? null : <Link to="/about">About</Link>}
    </footer>
  );
};

export default Footer;
