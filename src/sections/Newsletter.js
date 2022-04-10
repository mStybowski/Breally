import { useState } from "react";
import { initialFetch } from "../InitialFetch";
import "./Newsletter.css";

const Newsletter = () => {
  const [mail, setMail] = useState("");
  const [responseMessage, setResponseMessage] = useState(null);
  const [responseStatus, setResponseStatus] = useState(null);

  function newsletterSignupAction() {
    initialFetch("newsletter", JSON.stringify({ email: mail }), "POST")
      .then((response) => {
        setResponseStatus(response.ok);
        return response.json();
      })
      .then((body) => setResponseMessage(body.message));
  }

  return (
    <div className="newsletter-row">
      <div className="newsletter-wrapper">
        <h1>Sign up for Newsletter</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            newsletterSignupAction();
          }}
        >
          <label htmlFor="email">
            <input
              id="email"
              value={mail}
              placeholder="Type your email"
              onChange={(e) => setMail(e.target.value)}
            />
          </label>

          <button className="decor-button">Submit</button>
        </form>
        {responseMessage ? (
          <div
            style={{
              color: responseStatus ? "#5EDC4B" : "#fc7303",
            }}
          >
            {responseMessage}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Newsletter;
