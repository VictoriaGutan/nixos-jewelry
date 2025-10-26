import React, { useEffect, useState, useContext } from "react";
import Slider from "react-slick";
import styles from "./ProductSlider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ProductContext } from "../../context/productContext";

const ProductSlider = () => {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

    responsive: [
      {
        breakpoint: 600,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className={styles["product-carousel"]}>
      <h3 className={styles["product-carousel__title"]}>NEW ITEMS</h3>
      {products && products.length > 0 ? (
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className={styles["product-carousel__item"]}>
              <img src={product.image} alt={product.title} loading="lazy" />
              <h3>{product.title}</h3>
            </div>
          ))}
        </Slider>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductSlider;
