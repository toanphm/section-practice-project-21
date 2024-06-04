import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  function handleStatus({ isActive, isPending }) {
    return isPending ? "pending" : isActive ? "active" : "";
  }
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to={""} className={handleStatus}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"events"} className={handleStatus}>
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
