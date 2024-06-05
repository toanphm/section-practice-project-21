import classes from "./styles.module.css";

const Loading = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Loading;
