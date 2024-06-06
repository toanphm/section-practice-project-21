import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import classes from "./EventsNavigation.module.css";

function EventsNavigation() {
  const navigate = useNavigate();
  return (
    <nav className={classes.navigation}>
      {/* <button
        className={classes.btn__back}
        onClick={() => {
          navigate("..");
        }}
      >
        Back
      </button> */}
      <ul className={classes.list}>
        <li>
          <Link to="/events">All Events</Link>
        </li>
        <li>
          <Link to="/events/new">New Event</Link>
        </li>
      </ul>
    </nav>
  );
}

export default EventsNavigation;
