import React, { useEffect, useRef } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

import logo from "../../assets/images/eco-logo.png";
import user__icon from "../../assets/images/user-icon.png";
import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";

const Nav__link = [
  {
    path: "Home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const headref = useRef(null);
  const menuref = useRef(null);
  const tatolquantity = useSelector((state) => state.cart.totalQuantity);
  console.log(tatolquantity);
  const Stickyheaderfunction = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headref.current.classList.add("sticky__header");
      } else {
        headref.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    Stickyheaderfunction();
    return () => window.removeEventListener("scroll", Stickyheaderfunction);
  });

  const menuToggle = () => menuref.current.classList.toggle("Active__menu");
  return (
    <header className="header" ref={headref}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="" />

              <div>
                <h1>estore</h1>
              </div>
            </div>

            <div className="navigation " ref={menuref} onClick={menuToggle}>
              <ul className="menu">
                {Nav__link.map((item, index) => {
                  return (
                    <li className="nev__item" key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? "nav__active" : ""
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="nav__icon">
              <span className="fav__icon">
                <i className="bi bi-heart"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <i className="bi bi-bag"></i>
                <span className="badge">{tatolquantity}</span>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={user__icon} alt="" />
              </span>
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i className="bi bi-list"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
