import React from "react";
import "@/Style/Cart.css";
import Helmen from "./Helmen";
import CommonSection from "./UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "@/redux/slices/cartSlice";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state)=> state.cart.totalAmount)
  
  const dispatch = useDispatch();

  const deleteItemHandler = (id) => {
    dispatch(cartActions.removeItem(id));
  };
console.log(cartItems)
  return (
    <Helmen title="Cart">
      <CommonSection title="Shopping Cart" />
      <section className="cart_Wrap">
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h3 className="fs-4 text-center">No item added to the cart</h3>
              ) : (
                <table className="table bordered cart_Table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <img src={item.imageUrl} alt={item.productName} />
                        </td>
                        <td>{item.productName}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <motion.svg
                            whileTap={{ scale: 1.2 }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6"
                            onClick={() => deleteItemHandler(item.id)}
                            style={{ cursor: "pointer" }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                              clipRule="evenodd"
                            />
                          </motion.svg>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
            <div className="flex justify-between align-items-center">
              <h3>Subtotal</h3>
              <span className="fs-5 my-2 fw-bold">${totalAmount}</span>
            </div>
            <p>taxes and shipping will calculate in checkout</p>
            <div>
              <motion.button whileTap={{scale:1.1}} className="clock_buy">
                <Link to='/shop' className="text-white">Continue Shopping</Link>
              </motion.button>
              <motion.button whileTap={{scale:1.1}} className="clock_buy">
                <Link to='/checkout' className="text-white">Checkout</Link>
              </motion.button>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmen>
  );
};

export default Cart;
