import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Summary
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Experience
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/education"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Education
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Skills
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/language"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Language
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
