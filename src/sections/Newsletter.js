import { toaster } from "evergreen-ui";
import { useState } from "react";
import auth from "../../auth";

const Newsletter = (props) => {
  const { credentials } = auth;
  const Authorization = `Basic ${btoa(credentials)}`;

  const [mail, setMail] = useState("");

  async function newsletterSignupAction() {
    const res = await fetch(`https://adchitects-cms.herokuapp.com/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization,
      },
      body: JSON.stringify({ email: mail }),
    });

    const responseJSON = await res.json();

    if (res.status === 200) {
      toaster.success(responseJSON.message);
    } else {
      toaster.warning(responseJSON.message);
    }

    console.log(responseJSON);
  }

  return (
    <>
      <h1>Sign up for Newsletter</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          newsletterSignupAction();
        }}
      >
        <label htmlFor="email">
          Location
          <input
            id="email"
            value={mail}
            placeholder="Type your email"
            onChange={(e) => setMail(e.target.value)}
          />
        </label>

        <button>Submit</button>
      </form>
      <h3>Type: {props.type}</h3>
    </>
  );
};

export default Newsletter;
