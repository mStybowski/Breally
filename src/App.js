import { StrictMode, useState, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Page from "./Page";
import NotFound from "./NotFound";
import auth from "../auth";
import "./styles.css";
import BreallyLogo from "./assets/logo.svg";

const App = () => {
  const { credentials } = auth;
  const Authorization = `Basic ${new Buffer.from(credentials).toString(
    "base64"
  )}`;

  const [isAuthorized, setAuthorized] = useState(false);
  const [navPages, setNavPages] = useState([]);

  useEffect(() => {
    fetch("https://adchitects-cms.herokuapp.com/pages", {
      headers: {
        "Content-Type": "application/json",
        Authorization,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          setAuthorized(true);
        }
        return response.json();
      })
      .then((body) => setNavPages(body));
  }, []);

  if (!isAuthorized) {
    return (
      <div id="LoadingScreen">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <div id="navbar">
            <Link to="/">
              <img src={BreallyLogo} alt="Breally Logo" />
            </Link>
          </div>
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
          {navPages.map(({ url, id }) => (
            <Route exact key={id} path={url} element={<Page id={id} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
