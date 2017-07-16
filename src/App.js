import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import SkipLink from "./components/SkipLink";
import Container from "./reusable/Container";
import Main from "./reusable/Main";
import Navigation from "./reusable/Navigation";

import Home from "./pages/Home";
import About from "./pages/About";
import Uses from "./pages/Uses";
import Articles from "./pages/Articles";
import Article from "./pages/Article";

const NoMatch = () =>
  <Container>
    <Helmet>
      <title>404 ✴ Brandon Newton</title>
    </Helmet>
    <Navigation />

    <Main>
      <h1>404</h1>
    </Main>
  </Container>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <SkipLink href="#content">Skip to main content</SkipLink>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/uses" component={Uses} />
            <Route exact path="/articles" component={Articles} />
            <Route path="/articles/:slug" component={Article} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
