import React, { useState, useEffect } from "react";
import Helmen from "./Helmen";
import { Button } from "@/components/ui/button";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/Style/HomeView.css";
import { motion } from "framer-motion";
import Service from "./Service/Service";
import ProductList from "./UI/ProductList";
import ProductData from "@/assets/data/ProductData";
import counterImg from "../../public/image/countDown.png";
import Clock from "./UI/Clock";
import { Link } from "react-router-dom";
import { Scale } from "lucide-react";

const HomeView = () => {
  const [trendingProduct, setTrendingProduct] = useState([]);
  const [bestSales, setBestSales] = useState([]);
  const [newArrival, setNewArrival] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredCategory = ProductData.filter(
      (item) => item.Product_category === "Couch"
    );
    const bestSalesCategory = ProductData.filter(
      (item) => item.Product_category === "Beach"
    );
    const NewArrivalCategory = ProductData.filter(
      (item) => item.Product_category === "Mobile"
    );

    setTrendingProduct(filteredCategory);
    setBestSales(bestSalesCategory);
    setNewArrival(NewArrivalCategory);
  }, []);
  return (
    <Helmen title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row className="justify-center align-items-center">
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Trending product in {year}</p>
                <h2 className="hero_title">
                  Make your interior More Minimalistic & Modern
                </h2>
                <p className="hero_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, repudiandae necessitatibus consectetur iusto quia
                  quo laborum est iste eligendi nulla ipsam. Similique quas
                  totam amet maiores officia, vitae quisquam animi?
                </p>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src="image/logoMainPic.png" alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Service />
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProduct} />
          </Row>
        </Container>
      </section>

      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Sales</h2>
            </Col>
            <ProductList data={bestSales} />
          </Row>
        </Container>
      </section>

      <section className="countDown">
        <Container className="max-[560px]:p-0">
          <Row>
            <Col lg="6" className="flex flex-column max-[560px]:p-0 ">
              <div className="clock_top_content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />

              <motion.button whileTap={{ scale: 1.2 }} className="clock_buy">
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col
              lg="6"
              className="flex justify-end align-items-end max-[560px]:hidden md:hidden lg:flex"
            >
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="NewArrival">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">New Arrival</h2>
            </Col>
            <ProductList data={newArrival} />
          </Row>
        </Container>
      </section>
    </Helmen>
  );
};

export default HomeView;
