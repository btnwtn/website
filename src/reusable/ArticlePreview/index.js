import React from "react";
import slugify from "../../lib/slugify";
import pure from "recompose/pure";

import { PreviewLink, Card, Content, Title, Subtitle } from "./components";

const ArticlePreview = ({ image, title, subtitle, url, ...rest }) => {
  const slug = url ? url : `/articles/${slugify(title.toLowerCase())}`;

  return (
    <PreviewLink to={slug} {...rest}>
      <Card image={image}>
        <Content>
          <Title>
            {title}
          </Title>
          <Subtitle>
            {subtitle}
          </Subtitle>
        </Content>
      </Card>
    </PreviewLink>
  );
};

export default pure(ArticlePreview);
