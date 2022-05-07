import { Container, Row, Col, Card, Button } from "react-bootstrap";
import image from "./contact1.png";
import image2 from "./contact3.png";
import { GrGooglePlus } from "react-icons/gr";
import { AiTwotonePhone } from "react-icons/ai";
import "./Contact.css";
function Contact() {
  return (
    <Row>
      <Col sm={6} className="contact-wrapper">
        <Card style={{ width: "18rem" }} className="contact-card">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title className="contact-card-title">Tanzir</Card.Title>
            <Card.Text className="contact-designation">
              <b>Event Organizer</b>
            </Card.Text>
            <div className="social-media">
              <Card.Link href="mailto:noone@gmail.com" className="icon-button google-plus">
                <GrGooglePlus className="contact-google"/>
              </Card.Link>
              <Card.Link href="tel:+91983521456" className="icon-button">
                <AiTwotonePhone className="contact-phone" />
              </Card.Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} className="contact-wrapper">
        <Card style={{ width: "18rem" }} className="contact-card">
          <Card.Img variant="top" src={image2} style={{ height: "286px" }} />
          <Card.Body>
            <Card.Title className="contact-card-title">Jyotsna</Card.Title>
            <Card.Text className="contact-designation">
              <b>Event Organizer</b>
            </Card.Text>
            <div className="social-media">
              <Card.Link href="mailto:someone@gmail.com" className="icon-button google-plus">
                <GrGooglePlus className="contact-google"/>
              </Card.Link>
              <Card.Link href="tel:+917891236734" className="icon-button">
                <AiTwotonePhone className="contact-phone" />
              </Card.Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Contact;
