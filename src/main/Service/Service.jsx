import React from "react";
import { motion } from "framer-motion";
import { Container, Col, Row } from "reactstrap";
import "./service.css";
import ServiceData from "@/assets/data/ServiceData";
import { Scale } from "lucide-react";
const Service = () => {
  return (
    <section className="service">
      <Container>
        <Row>
          {ServiceData.map((item, index) => (
            <Col lg="3" md="4" key={index} className="mb-3 lg:mb-0">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="service_item flex justify-center align-items-center rounded p-2 md:mb-6"
                style={{ backgroundColor: `${item.background}` }}
              >
                <span className="bg-white rounded-circle p-2 flex justify-center align-items-center">
                  {item.icon}
                </span>
                <div className="p-2 service_card">
                  <h6>{item.title}</h6>
                  <p className="service_text">{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Service;
