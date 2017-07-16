import React from "react";
import { Helmet } from "react-helmet";

import Container from "../../reusable/Container";
import Main from "../../reusable/Main";
import Navigation from "../../reusable/Navigation";
import Section from "../../reusable/Section";
import Title from "../../reusable/Title";

const About = () =>
  <Container>
    <Helmet>
      <title>About ✴ Brandon Newton</title>
    </Helmet>
    <Navigation />

    <Main>
      <Section>
        <Title>About</Title>
      </Section>
    </Main>
  </Container>;

export default About;
