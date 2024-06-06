import MainNavigation from "../Navigation/Main";
import NewsletterSignup from "../Newsletter";
import ToggleMode from "../ToggleMode";
import classes from "./styles.module.css";

const Header = () => {
  return (
    <header className={classes.header__wrapper}>
      <div className={classes.header}>
        <MainNavigation />
        <ToggleMode />
        <NewsletterSignup />
      </div>
    </header>
  );
};

export default Header;
