import { StrictMode, useState, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SomePage from "./SomePage";
import auth from "../auth";
import "./styles.css";
import BreallyLogo from "./assets/logo.svg";

const App = () => {
  const { credentials } = auth;
  const Authorization = `Basic ${new Buffer.from(credentials).toString(
    "base64"
  )}`;

  const [isAuthorized, setAuthorized] = useState(false);

  useEffect(() => {
    console.log("Breally!");
    fetch("https://adchitects-cms.herokuapp.com", {
      headers: {
        "Content-Type": "application/json",
        Authorization,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          setAuthorized(true);
          console.log(response);
        }
        return response.body;
      })
      .then((body) => console.log(body));
  }, []);

  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">
            {isAuthorized ? (
              <img src={BreallyLogo} alt="Breally Logo" />
            ) : (
              <p>Not authorized</p>
            )}
          </Link>
        </header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <Routes>
          <Route path="/somepage/:id" element={<SomePage />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
