import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="https://hoyeongrande.github.io" exact component={Home} />
        <Route path="https://hoyeongrande.github.io/about" component={About} />
        <Route
          path="https://hoyeongrande.github.io/portfolio"
          component={Portfolio}
        />
        <Route
          path="https://hoyeongrande.github.io/contact"
          component={Contact}
        />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
