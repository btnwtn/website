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

        <meta name="description" content={article.meta.excerpt} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@bitwiselover" />
        <meta name="twitter:title" content={article.meta.title} />
        <meta name="twitter:description" content={article.meta.excerpt} />
        <meta name="twitter:creator" content="@bitwiselover" />

        <meta name="twitter:image" content={article.meta.image} />

        <meta property="og:title" content={article.meta.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://btnwtn.com/articles/${article.meta.slug}`}
        />
        <meta property="og:image" content={article.meta.image} />
        <meta property="og:description" content={article.meta.excerpt} />
        <meta property="og:site_name" content="Brandon Newton" />
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
