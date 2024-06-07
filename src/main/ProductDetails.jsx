import React, { useState, useRef, useEffect } from "react";
import ProductData from "@/assets/data/ProductData";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "./UI/CommonSection";
import Helmen from "./Helmen";
import { motion } from "framer-motion";
import "../Style/ProductDetail.css";
import ProductList from "./UI/ProductList";
import { useDispatch } from "react-redux";
import { cartActions } from "@/redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const product = ProductData.find((item) => item.id === id);

  const {
    imageUrl,
    Product_name,
    Product_price,
    avgRating,
    reviews,
    description,
    shortDesc,
    Product_category,
  } = product;

  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);
  const reviewUser = useRef("");
  const reviewMsg = useRef("");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
    console.log(reviewUserName, reviewUserMsg, rating);

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    toast.success("Review Submitted");
    console.log(reviewObj);
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        productName: Product_name,
        imageUrl: imageUrl,
        price: Product_price,
      })
    );
    toast.success("Added to cart");
  };

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const relatedProduct = ProductData.filter(
    (item) => item.Product_category === Product_category
  );

  return (
    <Helmen title={Product_name}>
      <CommonSection title="ProductDetail" />
      <section>
        <Container>
          <Row>
            <Col lg="6" className="flex justify-center align-items-center">
              <img src={imageUrl} alt="" />
            </Col>
            <Col lg="6" className="flex justify-center align-items-center">
              <div className="product_details">
                <h2>{Product_name}</h2>
                <div className="product_rating">
                  <div className="flex">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="coral"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="coral"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="coral"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="coral"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="coral"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    {/* Repeat the above SVG element for the number of stars you want */}
                  </div>
                  <p>({avgRating} ratings)</p>
                </div>

                <div className="flex align-items-center gap-3">
                  <span className="inline-block font-semibold">
                    ${Product_price}
                  </span>
                  <span>Category: {Product_category.toLowerCase()}</span>
                </div>
                <p>{shortDesc}</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="clock_buy"
                  onClick={addToCart}
                >
                  Add to cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pb-5">
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab_wrapper flex align-items-center gap-5 ">
                <h6
                  className={`${tab === "desc" ? "active_tab" : ""}`}
                  onClick={() => {
                    setTab("desc");
                  }}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active_tab" : ""}`}
                  onClick={() => {
                    setTab("rev");
                  }}
                >
                  Reviews({reviews.length})
                </h6>
              </div>

              <div className="tab_content my-4">
                {tab === "desc" ? (
                  description
                ) : (
                  <div className="product_review">
                    <div className="review_wrapper">
                      <ul>
                        {reviews?.map((item, index) => (
                          <li key={index}>
                            <h6>John Dan</h6>
                            <span>
                              {item.rating}( rating)
                            </span>
                            <p>{item.text}</p>
                          </li>
                        ))}
                      </ul>

                      <div className="review_form">
                        <h3>Leave your experience</h3>
                        <form action="" onSubmit={submitHandler}>
                          <div className="form_group">
                            <input
                              type="text"
                              placeholder="Enter name"
                              ref={reviewUser}
                              required
                            />
                          </div>
                          <div className="form_group flex align-items-center min-[561px]:gap-5 max-[560px]:gap-2">
                            <motion.span
                              whileTap={{ scale: 1.2 }}
                              onClick={() => {
                                setRating(1);
                              }}
                            >
                              1
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="coral"
                                className="size-4"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </motion.span>
                            <motion.span
                              whileTap={{ scale: 1.2 }}
                              onClick={() => {
                                setRating(2);
                              }}
                            >
                              2
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="coral"
                                className="size-4"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </motion.span>
                            <motion.span
                              whileTap={{ scale: 1.2 }}
                              onClick={() => {
                                setRating(3);
                              }}
                            >
                              3
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="coral"
                                className="size-4"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </motion.span>
                            <motion.span
                              whileTap={{ scale: 1.2 }}
                              onClick={() => {
                                setRating(4);
                              }}
                            >
                              4
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="coral"
                                className="size-4"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </motion.span>
                            <motion.span
                              whileTap={{ scale: 1.2 }}
                              onClick={() => {
                                setRating(5);
                              }}
                            >
                              5
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="coral"
                                className="size-4"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </motion.span>
                            {/* Repeat the above motion.span for ratings 2 to 5 */}
                          </div>

                          <div className="form_group">
                            <textarea
                              type="text"
                              placeholder="Review Message..."
                              ref={reviewMsg}
                              required
                            />
                          </div>

                          <motion.button
                            whileTap={{ scale: 1.1 }}
                            type="submit"
                            className="clock_buy"
                          >
                            Submit
                          </motion.button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Col>

            <Col lg="12" className="py-3">
              <h2 className="related_title">You might also like</h2>
            </Col>
            <ProductList data={relatedProduct} />
          </Row>
        </Container>
      </section>
    </Helmen>
  );
};

export default ProductDetails;
