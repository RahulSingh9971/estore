import React from "react";
import "../../style/Product-card.css";

import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slice/cartSlice";
import {  toast } from 'react-toastify';

function ProductCard({ item }) {

      const Dispetch = useDispatch()
      const addToCart =()=>{
        Dispetch(cartActions.addItem({
          id:item.id,
          productName:item.productName,
          price:item.price,
          image:item.imgUrl
        }))
        toast.success('Product added successfully')
      }
  // console.log(item);
  return (
    <Col lg="3" md="4">
      <div className="product__item">
        <div className="product__img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className="product__card--botton d-flex algin-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
}

export default ProductCard;
