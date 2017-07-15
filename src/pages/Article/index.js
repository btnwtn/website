import React from "react";
import articles from "../../_data/articles";

const Article = props => {
  const { slug } = props.match.params;
  const article = articles.find(a => a.meta.slug === slug);

  return (
    <pre>
      {JSON.stringify(article, null, 2)}
    </pre>
  );
};

export default Article;
