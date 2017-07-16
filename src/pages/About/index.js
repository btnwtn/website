import React from "react";
import { Helmet } from "react-helmet";

import Container from "../../reusable/Container";
import Main from "../../reusable/Main";
import Navigation from "../../reusable/Navigation";
import Section from "../../reusable/Section";
import Title from "../../reusable/Title";
import SectionImage from "../../reusable/SectionImage";

const About = () =>
  <Container>
    <Helmet>
      <title>About ✴ Brandon Newton</title>
    </Helmet>
    <Navigation />

    <Main>
      <Section>
        <Title>About</Title>
        <SectionImage src="/images/profile.jpg" />
      </Section>

      <p>
        I am a self-taught Frontend Engineer currently residing in San
        Francisco.
      </p>
    </Main>
  </Container>;

export default About;
