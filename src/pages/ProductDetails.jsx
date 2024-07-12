import React, { useEffect, useRef, useState } from "react";
import "../style/product-details.css";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../component/Helmet/helmet";
import CommonSection from "../component/UI/CommonSection";
import { motion } from "framer-motion";
import Products from "../assets/data/products";
import Productlist from "../component/UI/Productlist";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slice/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);
  const { id } = useParams();
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("Product added successfully");
  };

  const Product = Products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    category,
    shortDesc,
  } = Product;

  const RelatedProducts = Products.filter((item) => item.category === category);
  const submitHandler = (e) => {
    e.PreventDefault();

    const reviewUsername = reviewUser.current.valueOf();
    const reviewUserMsg = reviewMsg.current.valueOf();

    console.log(reviewUsername)
    console.log(reviewUserMsg)

  };

  useEffect(()=>{
    window.scrollTo(0,0)
  },[Product])
  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <div className="product__img">
                <img src={imgUrl} alt="" />
              </div>
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product___rating d-flex align-items-center gap-5 mb-3 ">
                  <div>
                    <span onClick={() => setRating(1)}>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setRating(2)}>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setRating(3)}>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setRating(4)}>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setRating(5)}>
                      <i class="ri-star-half-s-line"></i>
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating}</span>) ratings
                  </p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className="product__price">${price}</span>
                  <span>Category: {category.toLowerCase()}</span>
                </div>
                <p className="mt-3">{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__btn"
                  onClick={addToCart}
                >
                  Add To Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tap__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__reviews mt-5">
                  <div className="product__wrapper">
                    <ul>
                      {reviews?.map((item, index) => {
                        return (
                          <li key={index} className="mb-4">
                            <h6>Jhon Doe</h6>
                            <span>{item.rating}(average rating)</span>
                            <p>{item.text}</p>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="reveiw__form">
                      <h4>Leave your experiecne</h4>
                      <form action="" onClick={submitHandler}>
                        <div className="form__group">
                          <input
                            type="text"
                            placeholder="Enter name "
                            ref={reviewUser}
                          />
                        </div>

                        <div className="form__group d-flex align-items-center gap-5 rating__group">
                          <span>
                            1<i class="ri-star-fill"></i>
                          </span>
                          <span>
                            2<i class="ri-star-fill"></i>
                          </span>
                          <span>
                            3<i class="ri-star-fill"></i>
                          </span>
                          <span>
                            4<i class="ri-star-fill"></i>
                          </span>
                          <span>
                            5<i class="ri-star-fill"></i>
                          </span>
                        </div>
                        <div className="form__group">
                          <textarea
                            rows={4}
                            type="text"
                            placeholder="Review Masssage... "
                            ref={reviewMsg}
                          />
                        </div>
                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          type="submit"
                          className="buy__btn"
                        >
                          Submit{" "}
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12">
              <h2 className="related__title">You migth also like</h2>
            </Col>
            <Productlist Data={RelatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
