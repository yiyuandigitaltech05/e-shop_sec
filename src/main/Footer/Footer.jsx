import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { motion } from "framer-motion";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="md:mb-5 max-[560px]:mb-3">
            <div className="logo justify-start">
              <div>
                <h5 className="LogoName text-white mb-2">Multimart</h5>
              </div>
            </div>
            <p className="logo_text mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, accusantium? Delectus maxime aspernatur quisquam hic
              unde debitis recusandae eveniet vero libero suscipit? Vero nam
              numquam natus iure delectus, distinctio possimus?
            </p>
          </Col>
          <Col lg="3" className="md:mb-5 max-[560px]:mb-3">
            <div className="footer_quick-links">
              <h4 className="quick_links-title text-white mb-2">Top</h4>
              <ListGroup className="mt-2">
                <ListGroupItem className="border-0 ps-0">
                  <Link to="#">Modern Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="border-0 ps-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="border-0 ps-0">
                  <Link to="#">Modern Beach</Link>
                </ListGroupItem>
                <ListGroupItem className="border-0 ps-0">
                  <Link to="#">Mobile Phone</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" className="md:mb-5 max-[560px]:mb-3">
            <div className="footer_quick-links">
              <h4 className="quick_links-title text-white mb-2">
                Useful Links
              </h4>
              <ListGroup className="mt-2">
                <ListGroupItem className="border-0 ps-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="border-0 ps-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="border-0 ps-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="border-0 ps-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" className="md:mb-5 max-[560px]:mb-3">
            <div className="footer_quick-links">
              <h4 className="quick_links-title text-white mb-2">Contact</h4>
              <ListGroup className="mt-2">
                <ListGroupItem className="border-0 ps-0 flex justify-start align-items-start gap-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <p>
                    Guandong Rd., East Dist., Hsinchu City 30072 , Taiwan
                    (R.O.C.)
                  </p>
                </ListGroupItem>
                <ListGroupItem className="border-0 ps-0 flex justify-start align-items-start gap-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <p>+88690394859</p>
                </ListGroupItem>
                <ListGroupItem className="border-0 ps-0 flex justify-start align-items-start gap-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                  </span>
                  <p>exsample@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer_declare">
              本網站僅供學習、展示之用。
              此作品僅為練習及創作之用，無其他商業用途，如果作品有冒犯到任何智慧財產權，請聯繫jimmy36901@gmail.com，會盡速撤銷作品。
              <br />
              This work is only for practicing and creation, and has no other
              commercial purposes. If the work violates any intellectual
              property rights, please contact jimmy36901@gmail.com, and the work
              will be withdrawn as soon as possible
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
