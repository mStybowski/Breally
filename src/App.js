import { useState, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Page from "./Page";
import NotFound from "./NotFound";
import { initialFetch } from "./InitialFetch";

import "./styles.css";
import BreallyLogo from "./assets/logo.svg";

const urlToDisplayName = (url) => {
  let displayName;
  if (url === "/") {
    displayName = "Home";
  } else {
    let lowerCaseDisplayName = url.substring(1);
    displayName =
      lowerCaseDisplayName.charAt(0).toUpperCase() +
      lowerCaseDisplayName.slice(1);
  }

  return displayName;
};

const App = () => {
  const [responseStatus, setResponseStatus] = useState(false);
  const [navPages, setNavPages] = useState([]);

  useEffect(() => {
    initialFetch(`pages`)
      .then((response) => {
        setResponseStatus(response.ok);
        return response.json();
      })
      .then((body) => setNavPages(body));
  }, []);

  if (!responseStatus) {
    return (
      <div id="loading-screen">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <Router>
      <header>
        <div className="navbar">
          <div className="navbar-main-content">
            <Link to="/">
              <img src={BreallyLogo} alt="Breally Logo" />
            </Link>
            <div className="nav-items">
              {navPages.map(({ url, id }) => (
                <Link to={url} key={id}>
                  <div className="nav-item">{urlToDisplayName(url)}</div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <button className="decor-button">Contact Us</button>
          </div>
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
