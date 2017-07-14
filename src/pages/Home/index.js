import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import Container from "../../reusable/Container";
import Main from "../../reusable/Main";
import Navigation from "../../reusable/Navigation";
import { default as PageTitle } from "../../reusable/Title";
import Subtitle from "../../reusable/Subtitle";
import ArticlePreview from "../../reusable/ArticlePreview";

const fauxArticles = [
  {
    title: "Higher-Order Components for Beginners",
    subtitle: "A gentle introduction to Higher-Order Components",
    image: "http://i.imgur.com/7fmZj5D.jpg"
  },
  {
    title: "Math: the React.js Way",
    subtitle: "Mathematicians HATE him for this one trick!",
    image: "https://btnwtn.com/images/math-js-header.jpg"
  }
];

const SectionLabel = styled.p`
  margin: 0;
  margin-bottom: .75rem;
  font-size: .8em;
  font-weight: bold;
  letter-spacing: 1.04px;
  color: #646464;
`;

const Home = () =>
  <Container>
    <Helmet>
      <title>Brandon Newton</title>
    </Helmet>
    <Navigation />

    <Main>
      <div style={{ marginBottom: "2em" }}>
        <PageTitle>Brandon Newton</PageTitle>
        <Subtitle>
          Frontend Engineer making fun things in San Francisco.
        </Subtitle>
      </div>

      <SectionLabel>LATEST ARTICLES</SectionLabel>

      {fauxArticles.map(article =>
        <ArticlePreview
          style={{ marginBottom: "1.25em" }}
          key={article.title}
          {...article}
        />
      )}
    </Main>
  </Container>;

export default Home;
