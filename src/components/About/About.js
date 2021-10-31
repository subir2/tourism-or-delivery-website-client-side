import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import sectionBg from "./../../images/bgsection.png"
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Bounce";
import Footer from "../Footer/Footer";
const About = () => {
  return (
      <>
    <div
      style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}
      className="py-5"
    >
      <Container>
        <Zoom>
          <h2 className="text-center text-white mb-4">
            WELCOME TO Tourism Website
          </h2>
        </Zoom>
        <Row>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-white">About Us</h5>
              <p className="text-muted">
              "We are an employee-owned company with a passion for providing exemplary customer service, leveraging our expertise and technology to deliver innovative travel solutions in a gratifying work environment."
              </p>
              <p className="text-muted">
              TravelStore is headquartered in Los Angeles, California, with branch locations throughout the state, specializing in corporate travel solutions and custom vacation travel planning.

Our corporate centers are located in 
Los Angeles
, 
Sacramento
 and 
Irvine
. Our leisure vacation travel locations include Los Angeles, Sacramento, Irvine, 
Palos Verdes/South Bay
, 
Pasadena
 and 
Santa Barbara/Camarillo
.
              </p>
            </Bounce>
          </Col>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-white">Our Vision</h5>
              <p className="text-muted">
              We specialize in tours to Bangladesh but are always expanding and enhancing our wide range of offers, as well as adding new and exciting tours of Britain, Italy, Eastern Europe, Mexico and the Caribbean.

A family-owned business based in Boston, Tourism was founded in 1985 by Jim & Teresa Kelly and since that humble beginning it has grown into a trusted resource that has helped tens of thousands of people better enjoy their travel.
              </p>
              <h5 className="text-white">Our Mission</h5>
              <p className="text-muted">
              When booking a vacation, it is always better value to book an air-inclusive packages. Many travel agencies are unable to offer this. Crystal Travel & Tours works with most all international airlines and  frequently offers the most competitive fares for travel to Ireland,Britain and Europe.
              </p>
            </Bounce>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md>
            <Bounce bottom>
              <h5 className="text-white"></h5>
              <p className="text-muted">
                Be the first to know about news and updates.We never share you
                mail with others. Trust us!
              </p>
            </Bounce>
          </Col>
          <Col md className="d-flex align-items-center">
            <Bounce bottom>
              <Form className="w-100">
                <Form.Label className="text-white">
                  Leave your mail below
                </Form.Label>
                <Form.Group
                  className="d-flex text-white"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    style={{ background: "transparent", color: "white" }}
                    className="py-2 rounded-0"
                    type="email"
                    placeholder="Enter email"
                  />
                  <button
                    style={{ width: "120px" }}
                    className="btn rounded-0 btn-primary"
                  >
                    SIGN UP
                  </button>
                </Form.Group>
              </Form>
            </Bounce>
          </Col>
        </Row>
      </Container>
  
    </div>
     <Footer/>
     </>
    
  );
};

export default About;