import React from "react";
import { Link } from "react-router-dom";
import slugify from "../../lib/slugify";
import pure from "recompose/pure";
import styled from "styled-components";

const prop = prop => props => props[prop];

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 160px;
  border-radius: 3px;
  background-image: url(${prop("image")});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;

  &:hover {
    div > div {
      transform: scale(1.021) translateY(-4px);
    }

    div:after {
      opacity: 1;
    }
  }
`;

const Title = styled.h2`margin: 0;`;
const Subtitle = styled.p`margin: 0;`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  color: #f5f5f5;
  padding: .5em;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    border-radius: 3px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background: linear-gradient(
      rgba(0, 0, 0, .68) 10%,
      rgba(35, 35, 35, 1) 63%
    );
    opacity: .7;
    transition: opacity 100ms cubic-bezier(.25, .25, .315, 1.35);
  }

  > * {
    position: relative;
    z-index: 3;
  }
`;

const Background = styled.div`
  position: relative;
  height: 160px;
  overflow: hidden;
`;

const Image = styled.div`
  position: absolute;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  background: #e2ddd9;
  background-image: url(${prop("src")});
  background-size: cover;
  background-position: 50%;
  transition: transform 120ms cubic-bezier(.25, .25, .315, 1.35);
`;

const NormalizedLink = styled(Link)`
  text-decoration: none;
`;

const ArticlePreview = ({ image, title, subtitle, url, ...rest }) => {
  const slug = url ? url : `/articles/${slugify(title.toLowerCase())}`;

  return (
    <NormalizedLink to={slug}>
      <Card {...rest}>
        <Background>
          <Image src={image} />
        </Background>
        <Content>
          <Title>
            {title}
          </Title>
          <Subtitle>
            {subtitle}
          </Subtitle>
        </Content>
      </Card>
    </NormalizedLink>
  );
};

export default pure(ArticlePreview);
