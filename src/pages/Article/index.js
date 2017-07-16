import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import articles from "../../_data/articles";
import "./prism.css";

import Container from "../../reusable/Container";
import Main from "../../reusable/Main";
import Navigation from "../../reusable/Navigation";
import Title from "../../reusable/Title";
import SectionImage from "../../reusable/SectionImage";

const PublishDate = styled.p`
  display: block;
  margin: 0;
  margin-bottom: .25rem;
  font-size: .8em;
  font-weight: bold;
  color: #646464;
`;

const YOLO = html => ({ __html: html });

const Article = props => {
  const { slug } = props.match.params;
  const article = articles.find(a => a.meta.slug === slug);

  return (
    <Container>
      <Helmet>
        <title>
          {article.meta.title} ✴ Brandon Newton
        </title>
      </Helmet>

      <Navigation />
      <Main>
        <PublishDate>
          {article.meta.published}
        </PublishDate>
        <Title>
          {article.meta.title}
        </Title>

        {article.meta.image && <SectionImage src={article.meta.image} alt="" />}

        <div dangerouslySetInnerHTML={YOLO(article.content)} />
      </Main>
    </Container>
  );
};

export default Article;
