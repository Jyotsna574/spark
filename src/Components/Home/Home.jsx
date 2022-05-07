import "./home.css";

import { Container, Row, Col } from "react-bootstrap";
import image from "./images/559.png";

import { GiBullseye, GiConfirmed } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";

function Home() {
  return (
    <>
      <div className="bg-primary hero-header">
        <Container>
          <Row className="home-row">
            <Col lg={6} className="home-col">
              <h1 className="home-header-quote">
                Energy and persistence conquer all things.{" "}
              </h1>
              <p className="home-header-text">
                Spark is an annual event conducted for school students. A
                variety of quizzes are conducted in various cities.
              </p>
            </Col>
            <Col lg={6} className="home-col">
              <img src={image} className="home-image" />
            </Col>
          </Row>
        </Container>
      </div>

      <section>
        <Row className="home-row">
          <Col lg={4} className="home-test">
            <GiBullseye className="home-icon" />
            <b className="home-dsc-title">Be Productive</b>
            <p className="home-desc">
              Fermentum posuere urna nec tincidunt praesent semper feugiat nibh.
              A arcu cursus vitae congue mauris. Nam at lectus urna duis
              convallis. Mauris rhoncus aenean vel elit scelerisque mauris.
            </p>
          </Col>
          <Col lg={4} className="home-test">
            <GiConfirmed className="home-icon" />
            <b className="home-dsc-title">Be Confident</b>
            <p className="home-desc">
              Fermentum posuere urna nec tincidunt praesent semper feugiat nibh.
              A arcu cursus vitae congue mauris. Nam at lectus urna duis
              convallis. Mauris rhoncus aenean vel elit scelerisque mauris.
            </p>
          </Col>
          <Col lg={4} className="home-test">
            <HiOutlineLightBulb className="home-icon" />
            <b className="home-dsc-title">Be Competitive</b>
            <p className="home-desc">
              Fermentum posuere urna nec tincidunt praesent semper feugiat nibh.
              A arcu cursus vitae congue mauris. Nam at lectus urna duis
              convallis. Mauris rhoncus aenean vel elit scelerisque mauris.
            </p>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Home;
