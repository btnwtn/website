import styled from "styled-components";
import { MQ } from "../../constants";

const Container = styled.main`
  padding: 3em;
  max-width: 37.5em;
  margin-left: auto;
  margin-right: auto;

  ${MQ.Tablet} {
    padding: 1.5em;
  }

  ${MQ.Mobile} {
    padding: 1em;
  }
`;

export default Container;
