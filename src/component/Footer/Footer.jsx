import React from "react";
import "./Footer.css";


import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md='6'>
            <div className="logo">
              <div>
                <h1 className="text-white">estore</h1>
              </div>
            </div>
            <p className="footer__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              maiores vel iste tempore accusantium. At odio voluptates possimus
              cumque molestiae?
            </p>
          </Col>
          <Col lg="3" md='3' className="mb-4">
            <div className="footer__quick-links">
              <h2 className="quick__links-title">Top Category</h2>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0 ">
                  <Link to="#">Mobile Phone </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Morden Sofa </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watch</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2"className="mb-4" md='3'>
            <div className="footer__quick-links">
              <h2 className="quick__links-title">Useful links</h2>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer__quick-links">
              <h2 className="quick__links-title">Contect</h2>
              <ListGroup className="footer__content">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>16A/9 Ambedkar nagar haiderpur</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>+91 99 9999 9999</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>Estore00@gamil.con</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <div className="footer__copyright">
              Copyright {year} Devloped by Rahul Singh. All right reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
