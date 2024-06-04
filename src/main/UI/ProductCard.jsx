import React from "react";
import { motion } from "framer-motion";
import "../../Style/Product_card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "@/redux/slices/cartSlice";

import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.Product_name,
        price: item.Product_price,
        image: item.imageUrl,
      })
    );

    toast.success("Product added successfully");
  };
  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product_item">
        <div className="product_img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imageUrl} alt="" />
        </div>
        <div className="p-2 product_info">
          <h3 className="product_name">
            <Link to={`/shop/${item.id}`}>{item.Product_name}</Link>
          </h3>
          <span>{item.Product_category}</span>
        </div>
        <div className="prodcut_card_bottom d-flex justify-content-between align-items-center p-2">
          <span className="price">{item.Product_price}</span>
          <motion.span
            whileTap={{ scale: 1.2 }}
            className="product_plus"
            onClick={addToCart}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
