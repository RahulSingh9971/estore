import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

import "../style/home.css";
import Helmet from "../component/Helmet/helmet";
import heroimg from "../assets/images/hero-img.png";
import Service from "../Service/Service";
import Productlist from "../component/UI/Productlist";
import Products from "../assets/data/products";
import Counterimg from "../assets/images/counter-timer-img.png";
import Clock from "../component/UI/clock";

const Home = () => {
  const [trendingProducts, SetTrendingProduct] = useState([]);
  const [bestSalesProducts, SetbestSalesProduct] = useState([]);
  const [bestMobileProducts, SetbestMoblieProduct] = useState([]);
  const [wairlessProducts, SetWairlessProduct] = useState([]);
  const [popularProducts, SetPopularProduct] = useState([]);


  const year = new Date().getFullYear();

  const [timerDays, setDays] = useState("00");
  const [timerHours, setHours] = useState("00");
  const [timerMinutes, setminutes] = useState("00");
  const [timerSeconds, setSeconds] = useState("00");

  let interval;

  function countDwon() {
    const destinatin = new Date("10 May 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const diffrent = destinatin - now;

      const day = Math.floor(diffrent / (24 * 60 * 60 * 1000));

      const hour = Math.floor(
        (diffrent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minute = Math.floor((diffrent % (1000 * 60 * 60)) / (1000 * 60));

      const second = Math.floor((diffrent % (1000 * 60)) / 1000);

      if (destinatin > 0) {
        clearInterval(interval.current);
      } else {
        setDays(day);
        setHours(hour);
        setminutes(minute);
        setSeconds(second);
        console.log(day);
      }
    }, 1000);
  }

  useEffect(() => {
    countDwon();
  });

  useEffect(() => {
    const filterTrendingProduct = Products.filter(
      (item) => item.category === "chair"
    );
    const filterBestSalesProduct = Products.filter(
      (item) => item.category === "sofa"
    );
    const filterMoblieProduct = Products.filter(
      (item) => item.category === "mobile"
    );
    const filterWirelessProduct = Products.filter(
      (item) => item.category === "wireless"
    );

    const filterPopularProduct = Products.filter(
      (item) => item.category === "watch"
    );

    SetTrendingProduct(filterTrendingProduct);
    SetbestSalesProduct(filterBestSalesProduct);
    SetbestMoblieProduct(filterMoblieProduct);
    SetWairlessProduct(filterWirelessProduct);
    SetPopularProduct(filterPopularProduct);

  }, []);

  console.log(timerDays);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle"> Tending product in {year}</p>
                <h2>Make Your Interior More Minimalistic & modern</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Alias impedit pariatur qui laboriosam voluptas cumque
                  cupiditate commodi velit nisi ad.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroimg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Service />
      <section className="trending__product">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Product</h2>
            </Col>
            <Productlist Data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <Productlist Data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__counter">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-Col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 md-2">Limited Offers</h4>
                <h3 className="text-white fs-5 md-3">Quality Armchair</h3>
              </div>
              <Clock
                timerDays={timerDays}
                timerHours={timerHours}
                timerMinutes={timerMinutes}
                timerSeconds={timerSeconds}
              />
              <button className="buy__btn store__btn">
                <Link to="/shop">Visit Store</Link>
              </button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={Counterimg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <Productlist Data={bestMobileProducts} />
            <Productlist Data={wairlessProducts} />
          </Row>
        </Container>
      </section>
      <section className="popular__category">
        <Container>
          <Row>
          <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Popular in Category</h2>
            </Col>
            <Productlist Data={popularProducts} />
           
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
