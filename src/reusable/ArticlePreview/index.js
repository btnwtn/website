import React from "react";
import slugify from "../../lib/slugify";
import pure from "recompose/pure";

import { PreviewLink, Card, Content, Title, Excerpt } from "./components";

const ArticlePreview = ({ image, title, excerpt, published, url, ...rest }) => {
  const slug = url ? url : `/articles/${slugify(title.toLowerCase())}`;

  return (
    <PreviewLink to={slug} {...rest}>
      <Card image={image}>
        <Content>
          <Title>
            {title}
          </Title>
          <Excerpt>
            {excerpt}
          </Excerpt>
        </Content>
      </Card>
    </PreviewLink>
  );
};

export default pure(ArticlePreview);
