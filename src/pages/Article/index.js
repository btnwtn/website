import React from "react";
import { Helmet } from "react-helmet";
import articles from "../../_data/articles";

import Container from "../../reusable/Container";
import Main from "../../reusable/Main";
import Navigation from "../../reusable/Navigation";
import Title from "../../reusable/Title";
import Subtitle from "../../reusable/Subtitle";

const YOLO = html => ({ __html: html });

const Article = props => {
  const { slug } = props.match.params;
  const article = articles.find(a => a.meta.slug === slug);

  return (
    <Container>
      <Helmet>
        <title>
          {article.meta.title}
        </title>
      </Helmet>

      <Navigation />
      <Main>
        <Title>
          {article.meta.title}
        </Title>

        <div dangerouslySetInnerHTML={YOLO(article.content)} />
      </Main>
    </Container>
  );
};

export default Article;
