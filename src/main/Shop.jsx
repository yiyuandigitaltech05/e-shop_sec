import React, { useState, useEffect } from "react";
import CommonSection from "./UI/CommonSection";
import Helmen from "./Helmen"; // Ensure this is the correct import
import { Container, Row, Col } from "reactstrap";
import "../Style/shop.css";
import ProductList from "./UI/ProductList";
import useGetData from "@/custom-hook/UseGetData";

const Shop = () => {
  const { data: products, loading } = useGetData("products");
  const [product, setProduct] = useState([]);

  console.log(products)
  useEffect(() => {
    if (products) {
      setProduct(products);
    }
  }, [products]);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "Filter By Category") {
      setProduct(products);
    } else {
      const filterProducts = products.filter(
        (item) => item.category === filterValue
      );
      setProduct(filterProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProduct(searchedProducts);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmen title="Shop">
      <CommonSection title="Products" />

      <section className="shop_wrap">
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter_widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="Couch">Couch</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Beach">Beach</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter_widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search_box flex">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={handleSearch}
                />
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="shop_product_wrap">
        <Container>
          <Row>
            {loading ? (
              <h1 className="text-center fs-4">Loading...</h1>
            ) : product.length === 0 ? (
              <h1 className="text-center fs-4">No products found</h1>
            ) : (
              <ProductList data={product} />
            )}
          </Row>
        </Container>
      </section>
    </Helmen>
  );
};

export default Shop;
