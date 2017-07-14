import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const NavLink = styled(Link)`
  display: block;
  padding: .5em;
  font-size: .75em;
  font-weight: bold;
  text-transform: uppercase;
`;

const Nav = styled.nav`
  display: flex;
  align-items: baseline;
  margin-bottom: 3em;

  a:not(:last-child) {
    margin-right: 1em;
  }
`;

const SiteTitle = NavLink.withComponent("span").extend`
  color: #646464;
  margin-right: auto;
  padding-left: 0;
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
