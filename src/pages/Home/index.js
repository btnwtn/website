import React from "react";
import { Helmet } from "react-helmet";

import Container from "../../reusable/Container";
import Main from "../../reusable/Main";
import Navigation from "../../reusable/Navigation";
import { default as PageTitle } from "../../reusable/Title";
import Subtitle from "../../reusable/Subtitle";
import ArticlePreview from "../../reusable/ArticlePreview";

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

      <ArticlePreview
        title="Math: the React.js Way"
        subtitle="React is amazing, use it for everything."
        image="https://btnwtn.com/images/math-js-header.jpg"
      />
    </Main>
  </Container>;

export default Home;
