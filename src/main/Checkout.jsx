import React from "react";
import {Container,Row,Col,Form,FormGroup} from"reactstrap"
import Helmen from "./Helmen";
import CommonSection from "./UI/CommonSection";
import "../Style/Checkout.css"
import { useSelector } from "react-redux";

const Checkout = () => {

  const totalQty = useSelector(state=>state.cart.totalQuantity);
  const totalAmount = useSelector(state=>state.cart.totalAmount)

  return <Helmen title="Checkout">
    <CommonSection title="Checkout"/>
    <section className="Checkout_Wrap">
      <Container>
        <Row>
          <Col lg='8'>
            <h6 className="mb-4 fw-bold">Billing Information</h6>
            <Form>
              <FormGroup>
                <input type="text" placeholder="Enter your name" />
              </FormGroup>
              <FormGroup>
                <input type="email" placeholder="Enter your email" />
              </FormGroup>
              <FormGroup>
                <input type="number" placeholder="Phone number" />
              </FormGroup>
              <FormGroup>
                <input type="text" placeholder="Street address" />
              </FormGroup>
              <FormGroup>
                <input type="text" placeholder="City" />
              </FormGroup>
              <FormGroup>
                <input type="text" placeholder="Postal Code" />
              </FormGroup>
              <FormGroup>
                <input type="text" placeholder="Country" />
              </FormGroup>
            </Form>
          </Col>
          <Col lg='4'>
            <div className="checkout__cart ">
              <h6>Total Qty: <span>{totalQty} {totalQty>=2? "items" :"item"}</span></h6>
              <h6 className="my-3">Subtotal: <span>${totalAmount}</span></h6>
              <h6 className="my-2"><span>Shipping: <br />free Shipping</span> <span>$0</span></h6>
              <hr />
              <h4 className="my-2">Total Cost: <span>${totalAmount}</span></h4>
              <button className="clock_buy text-black bg-slate-100 w-100 mx-auto block">Place an order</button>
            </div>
            
          </Col>
        </Row>
      </Container>
    </section>
  </Helmen>;
};

export default Checkout;
