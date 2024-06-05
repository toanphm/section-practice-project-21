import { useContext } from "react";
import classes from "./styles.module.css";
import { ThemeContext } from "../../App";

const ToggleMode = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleOnChangeMode() {
    console.log(theme);
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }
  return (
    <div className={`${classes.toggle__wrapper} ${classes[theme]}`}>
      <div className={classes.toggle__light}>
        <label htmlFor="light"></label>
        <input
          id="light"
          type="checkbox"
          hidden
          onChange={handleOnChangeMode}
        />
      </div>
      <div className={classes.toggle__dark}>
        <label htmlFor="dark"></label>
        <input id="dark" type="checkbox" hidden onChange={handleOnChangeMode} />
      </div>
    </div>
  );
};

export default ToggleMode;
