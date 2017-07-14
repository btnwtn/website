import styled from "styled-components";

const SkipLink = styled.a`
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(1px 1px 1px 1px);
  margin: 0;
  overflow: hidden;

  &:focus {
    width: auto;
    height: auto;
    clip: auto;
  }
`;

export default SkipLink;
