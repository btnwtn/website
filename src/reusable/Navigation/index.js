import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { MQ } from "../../constants";

const NavLink = styled(Link)`
  display: block;
  padding: .5em;
  font-size: .75em;
  font-weight: bold;
  text-transform: uppercase;

  ${MQ.Mobile} {
    padding: .3em;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: baseline;
  margin-bottom: 3em;

  ${MQ.Mobile} {
    flex-wrap: wrap;
  }

  a:not(:last-child) {
    margin-right: 1em;

    ${MQ.Mobile} {
      margin-right: .5em;
    }
  }
`;

const SiteTitle = NavLink.withComponent("span").extend`
  color: #646464;
  margin-right: auto;
  padding-left: 0;
  font-size: .7em;

  ${MQ.Toy} {
    padding: 0;
    margin-bottom: .75em;
    width: 100%;
  }
`;

const Navigation = () =>
  <Nav>
    <SiteTitle>BTNWTN</SiteTitle>
    <NavLink exact to="/">
      Home
    </NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/articles">Articles</NavLink>
    <NavLink to="/uses">Uses</NavLink>
  </Nav>;

export default Navigation;
