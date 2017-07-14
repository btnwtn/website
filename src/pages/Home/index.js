import React from "react";

import Container from "../../reusable/Container";
import Main from "../../reusable/Main";
import Navigation from "../../reusable/Navigation";
import Title from "../../reusable/Title";
import Subtitle from "../../reusable/Subtitle";

const Home = () =>
  <Container>
    <Navigation />

    <Main>
      <Title>Brandon Newton</Title>
      <Subtitle>Frontend Engineer making fun things in San Francisco.</Subtitle>
    </Main>
  </Container>;

export default Home;
