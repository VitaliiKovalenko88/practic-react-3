import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
