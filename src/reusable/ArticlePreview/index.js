import React from "react";
import pure from "recompose/pure";

import { PreviewLink, Card, Content, Title, Excerpt } from "./components";

const ArticlePreview = ({
  slug,
  image,
  title,
  excerpt,
  published,
  ...rest
}) => {
  return (
    <PreviewLink to={`/articles/${slug}`} {...rest}>
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
