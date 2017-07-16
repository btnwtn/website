import React from "react";
import { Helmet } from "react-helmet";

import Container from "../../reusable/Container";
import Main from "../../reusable/Main";
import Navigation from "../../reusable/Navigation";
import Section from "../../reusable/Section";
import Title from "../../reusable/Title";
import Subtitle from "../../reusable/Subtitle";

const Uses = () =>
  <Container>
    <Helmet>
      <title>Uses ✴ Brandon Newton</title>
    </Helmet>
    <Navigation />

    <Main>
      <Section>
        <Title>Uses</Title>
        <Subtitle>Collection of useful software and utils.</Subtitle>
      </Section>

      <h2>Terminal &amp; Editor</h2>
      <ul>
        <li>
          <a href="https://www.iterm2.com/">iTerm2</a> with the{" "}
          <a href="http://ethanschoonover.com/solarized">Solarized Dark</a>{" "}
          theme.
        </li>
        <li>
          <a href="http://www.vim.org/">Vim</a> with the Solarized Dark theme as
          well.
        </li>
      </ul>

      <h2>Vim Plugins</h2>
      <ul>
        <li>
          <a href="https://github.com/junegunn/vim-plug">vim-plug</a> to manage
          plugins.
        </li>
        <li>
          <a href="https://github.com/tpope/vim-sensible">vim-sensible</a>,
          great starting point for any vim configuration.
        </li>
        <li>
          <a href="https://github.com/kien/ctrlp.vim">ctrlp</a>, fuzzy finding
          matching. Going to be giving{" "}
          <a href="https://github.com/junegunn/fzf.vim">fzf</a> a shot soon.
        </li>
        <li>
          <a href="https://github.com/sbdchd/neoformat">Neoformat</a>, runs{" "}
          <a href="https://github.com/prettier/prettier">Prettier</a> on save.
        </li>
        <li>
          <a href="https://github.com/othree/yajs.vim">yajs.vim</a>, Javascript
          syntax.
        </li>
        <li>
          <a href="https://github.com/mxw/vim-jsx">vim-jsx</a>, JSX support for
          Vim.
        </li>
      </ul>
    </Main>
  </Container>;

export default Uses;
