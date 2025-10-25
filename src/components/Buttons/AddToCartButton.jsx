import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import styles from "./AddToCart.module.scss";

const AddToCartButton = ({
  product,
  amount = 1,
  className = "",
  children = "Add to cart",
}) => {
  const { handleAddToCart } = useContext(CartContext);

  const handleClick = () => {
    handleAddToCart({ ...product, amount });
  };

  return (
    <button
      className={`${styles["add-to-cart"]}${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default AddToCartButton;
