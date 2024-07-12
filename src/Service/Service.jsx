import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./service.css";
import { motion } from "framer-motion";

import serviceData from "../assets/data/serviceData";

function Service() {
  return (
    <section className="services">
      <Container>
        <Row>
          {serviceData.map((item, index) => {
            return (
              <Col lg="3" md="4" key={index}>
                <motion.div
                  className="service__item"
                  style={{ background: `${item.bg}` }}
                    whileTap={{scale:1.1}}
                >
                  <span>
                    <i className={item.icon}></i>
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Service;
