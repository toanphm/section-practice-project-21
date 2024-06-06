import { Form, useFetcher } from "react-router-dom";
import classes from "./styles.module.css";
import { useEffect, useState } from "react";

function NewsletterSignup() {
  const fetcher = useFetcher();
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data) {
      window.alert(fetcher.data.message);
      setEmail("");
    }
  }, [fetcher.state, fetcher.data]);
  return (
    <fetcher.Form
      method="post"
      action="NewsletterSignup"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
        value={email}
        onChange={(e) => {
          console.log(e.currentTarget.value);
          setEmail(e.currentTarget.value);
        }}
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");

  // send to backend newsletter server ...
  console.log(email);
  return { message: "Signup successful!" };
}
