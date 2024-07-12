import React from "react";
import ProductCard from "./ProductCard";

function Productlist({ Data }) {
  return (
    <>
      {Data?.map((item,index) => {
        return <ProductCard item={item} key={index}/>;
      })}
    </>
  );
}

export default Productlist;
