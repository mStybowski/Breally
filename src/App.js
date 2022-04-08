import { useState, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
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
    <Router>
      <header>
        <div id="navbar">
          <Link to="/">
            <img src={BreallyLogo} alt="Breally Logo" />
          </Link>
          <Link to="/products">Products</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/about">About</Link>
        </div>
      </header>
      <Switch>
        {navPages.map(({ url, id }) => (
          <Route exact key={id} path={url}>
            <Page id={id} />
          </Route>
        ))}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

render(<App />, document.getElementById("root"));
