import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import articles from "../../_data/articles";
import "./prism.css";

import Container from "../../reusable/Container";
import Main from "../../reusable/Main";
import Navigation from "../../reusable/Navigation";
import Title from "../../reusable/Title";

const Image = styled.img`
  display: block;
  max-width: 100%;
  margin: 1em 0;
  border-radius: 3px;
`;

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

        {article.meta.image && <Image src={article.meta.image} alt="" />}

        <div dangerouslySetInnerHTML={YOLO(article.content)} />
      </Main>
    </Container>
  );
};

export default Article;
