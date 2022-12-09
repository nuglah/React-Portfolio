import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "../components/contact-form";
import "../App.css";

function Contact() {
  return (
    <div className="container bg-dark text-light">
      <Jumbotron fluid className="p-5 mb-0 bg-dark text-light">
        <Container className="text-center">
          <div className="p-md-5">
            <h1 className="text-light">Contact Form</h1>
          </div>
        </Container>
      </Jumbotron>

      <Container fluid className="shadow bg-dark mb-5 ">
        <Container className="p-4">
          <Row>
            {/* <Col>
              <Container>
                <h4 style={{ color: "#F06543" }}>Contact Info</h4>
                <p>
                  <a href="mailto:thisisanemailaddressthatis@gmail.com">
                    <span className="pr-3">
                      <FaEnvelope />
                    </span>
                    thisisanemailaddressthatis@gmail.com
                  </a>
                </p>

                <p>
                  <a href="https://github.com/nuglah" target="_blank">
                    <span className="pr-3">
                      <FaGithub />
                    </span>
                    nuglah
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/ryan-green-36a157237/"
                    target="_blank"
                  >
                    <span className="pr-3">
                      <FaLinkedin />
                    </span>
                    ryan-green-36a157237
                  </a>
                </p>
              </Container>
            </Col> */}

            <Col sm={12} md={6} lg={8} className="pt-sm-4 pt-lg-0">
              <Container>
                <h4>Send a Message</h4>
                <ContactForm />
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Contact;
