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
        Hi! I'm Brandon Newton, a Full Stack Engineer who specializes in
        performant and responsive Frontend development.
      </p>

      <p>
        I got my start building websites back in 2005/6. Thirteen year old me
        picked out{" "}
        <a href="https://www.amazon.com/PHP-MySQL-Web-Development-3rd/dp/0672326728">
          a book
        </a>{" "}
        on PHP and MySQL, and dove head first into web development. I built a
        CMS to host my artwork and animations, which probably consisted of a
        single 1000LOC <code>index.php</code> containing a single{" "}
        <code>switch ($_GET['page']) {"{ /* … */ }"}</code>.
      </p>

      <p>
        Fast-forwarding to the present, I've swapped out PHP for Node, and MySQL
        for PostgreSQL. I'm incredibly excited by Functional and Declarative
        Programming techniques. And I absolutely love building applications with{" "}
        <a href="https://facebook.github.io/react/">React.js</a>.
      </p>

      <p>
        When I'm not nerding out on computer stuff, I love to spend time with my
        girlfriend Sophie. I'm really into playing guitar, rock climbing,
        skateboarding, and cooking for friends and family.
      </p>

      <p>
        <a href="mailto:btnwtn@gmail.com">Shoot me an email</a> if you want to
        say hi or have any questions!
      </p>
    </Main>
  </Container>;

export default About;
