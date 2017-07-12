import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import styled from "styled-components";
import "./App.css";

const Container = styled.div`
  max-width: 37.5em;
  margin-left: auto;
  margin-right: auto;
`;

const Home = () =>
  <Container>
    <h1>Home</h1>
  </Container>;

const About = () =>
  <Container>
    <h1>About</h1>
  </Container>;

const NoMatch = () =>
  <Container>
    <h1>404</h1>
  </Container>;

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
