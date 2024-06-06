import { Link, useRouteError } from "react-router-dom";
import classes from "./errorBoundary.module.css";

const ErrorBoundary = () => {
  const { status, statusText, data } = useRouteError();
  const res = useRouteError();

  console.log(res);
  //   if (status === 404) {
  //     return <div>This page doesn't exist!</div>;
  //   }

  //   if (status === 401) {
  //     return <div>You aren't authorized to see this</div>;
  //   }

  //   if (status === 503) {
  //     return <div>Looks like our API is down</div>;
  //   }

  //   if (status === 418) {
  //     return <div>🫖</div>;
  //   }

  return (
    <section className={classes.container}>
      <div className={classes.errorBoundary}>
        <h1>{status}</h1>
        <h2>{statusText ?? "no title"}</h2>
        <p>{data ?? "something is wrong, try again!"}</p>
        <Link to="..">Back to Home</Link>
      </div>
    </section>
  );
};

export default ErrorBoundary;
