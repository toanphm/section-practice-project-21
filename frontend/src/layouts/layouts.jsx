import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function Layout() {
  return (
    <div>
      <MainNavigation />
      <h2>Layout</h2>
      <Outlet />
    </div>
  );
}
