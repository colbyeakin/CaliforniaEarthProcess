import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/earth-process" className="nav-link">
        Earth Processes
      </NavLink>
      <NavLink to="/references" className="nav-link">
        References
      </NavLink>
    </nav>
  );
}