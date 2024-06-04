import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

export default function EventLayout() {
  return (
    <div>
      <EventsNavigation />
      <h2>Event Layout</h2>
      <Outlet />
    </div>
  );
}
