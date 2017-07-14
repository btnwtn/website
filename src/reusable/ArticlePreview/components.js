import styled from "styled-components";
import { Link } from "react-router-dom";

const prop = prop => props => props[prop];

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 240px;
  border-radius: 3px;
  background-image: url(${prop("image")});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
  transition: transform 100ms cubic-bezier(.25, .25, .315, 1.35) box-shadow
    100ms cubic-bezier(.25, .25, .315, 1.35);

  &:hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, .1), 0 3px 6px rgba(0, 0, 0, .08);

    div:after {
      opacity: 1;
    }
  }
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: .1em;
`;

export const Subtitle = styled.p`margin: 0;`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  padding: .8em;
  color: #f5f5f5;
  font-size: .8em;

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
    opacity: .8;
    transition: opacity 100ms cubic-bezier(.25, .25, .315, 1.35);
  }

  > * {
    position: relative;
    z-index: 3;
  }
`;

export const PreviewLink = styled(Link)`
  display: block;
  text-decoration: none;
  transition: transform 120ms cubic-bezier(.25, .25, .315, 1.35);

  &:hover {
    transform: translateY(-1px);
  }
`;