import React from "react";
import Helmen from "./Helmen";
import {Container ,Row ,Col , Form, FormGroup} from "reactstrap"
import { Link } from "react-router-dom";
import "../Style/Login.css"

const Login = () => {
  return <Helmen title="Login">
    <section>
      <Container>
        <Row>
          <Col lg='6' className="m-auto text-center">
          <h3 className="fw-bold fs-4">Login</h3>
          

          <Form className="auth_form">
            <FormGroup className="form_group">
              <input type="email" placeholder="Enter your email"/>
            </FormGroup>
            <FormGroup className="form_group">
              <input type="password" placeholder="Enter your password"/>
            </FormGroup>
            <button className="clock_buy auth_btn mx-auto block">Login</button>
          </Form>
          <p className="text-slate-400">Don't have an account? <Link to="/signup">Create an account</Link></p>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmen>;
};

export default Login;
