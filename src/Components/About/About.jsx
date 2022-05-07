import aboutImage from "./about.svg";

import { Container, Row, Col } from "react-bootstrap";

import "./About.css";

function About() {
  return (
    <Container>
      <Row style={{ height: "80vh" }}>
        <Col sm={6} className="about-image-container">
          {" "}
          <img src={aboutImage} className="about-image" />
        </Col>
        <Col sm={6} className="about-text-container">
          <p className="about-text">
            {" "}
            <b>Spark</b>  is an annual event conducted for school students. A variety of
            quizzes are conducted in various cities. It is organised by IIT
            Madras students who are actively running Technical Fest of IIT
            Madras i.e Shaastra
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
