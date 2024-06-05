import { Outlet } from "react-router-dom";
import EventsNavigation from "../../components/Navigation/Event/EventsNavigation";

export default function EventLayout() {
  return (
    <div>
      <EventsNavigation />
      <Outlet />
    </div>
  );
}
