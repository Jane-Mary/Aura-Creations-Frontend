import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = () => {
  const getNavLinkStyle = (isActive: boolean) => ({
    marginRight: "2rem",
    textDecoration: "none",
    color: isActive ? "#CA5310" : "black",
    fontWeight: isActive ? "bold" : "normal", 
  });
  return (
    <>
      <div className="nav">
        <span>Aura Creations</span>
        <nav>
          <NavLink to="/" style={({ isActive }) => getNavLinkStyle(isActive)}>
            Home
          </NavLink>
          <NavLink
            to="/user/services"
            style={({ isActive }) => getNavLinkStyle(isActive)}
          >
            Services
          </NavLink>
          <NavLink
            to="/user/about"
            style={({ isActive }) => getNavLinkStyle(isActive)}
          >
            About
          </NavLink>
          <NavLink
            to="/user/gallery"
            style={({ isActive }) => getNavLinkStyle(isActive)}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/user/custom"
            style={({ isActive }) => getNavLinkStyle(isActive)}
          >
            Customize
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
