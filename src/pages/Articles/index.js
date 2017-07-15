import React from "react";
import { Helmet } from "react-helmet";
import articles from "../../_data/articles";

import Container from "../../reusable/Container";
import Main from "../../reusable/Main";
import Section from "../../reusable/Section";
import Navigation from "../../reusable/Navigation";
import Title from "../../reusable/Title";
import Subtitle from "../../reusable/Subtitle";
import ArticlePreview from "../../reusable/ArticlePreview";

const Home = () =>
  <Container>
    <Helmet>
      <title>Articles ✴ Brandon Newton</title>
    </Helmet>
    <Navigation />

    <Main>
      <Section>
        <Title>Articles &amp; Thoughts</Title>
        <Subtitle>I sometimes write about things.</Subtitle>
      </Section>

      {articles.map(({ meta }) =>
        <ArticlePreview
          style={{ marginBottom: "1.25em" }}
          key={meta.title}
          {...meta}
        />
      )}
    </Main>
  </Container>;

export default Home;
