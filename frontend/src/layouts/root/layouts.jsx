import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import classes from "./styles.module.css";

export default function Layout() {
  const { theme } = useContext(ThemeContext);
  return (
    <div data-theme={theme} className={classes.layout}>
      <Header />
      <div className={classes.container}>
        <main className={classes.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
