import { useState } from "react";
import styles from "./CartItem.module.scss";

const CartItem = ({
  title,
  price,
  id,
  removeAction,
  onChangeAction,
  amount,
  image,
}) => {
  const [value, setValue] = useState(amount);

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (newValue === "") {
      setValue("");
      return;
    }

    const numericValue = Number(newValue);

    if (isNaN(numericValue) || numericValue < 1) return;

    setValue(numericValue);
    onChangeAction(id, numericValue);
  };

  const numericPrice = Number(price) || 0;
  const numericAmount = Number(value) || 1;

  return (
    <div className={styles["cart-item"]}>
      <img src={image} className={styles["cart-item__image"]} />

      <div className={styles["cart-item__info"]}>
        <div className={styles["cart-item__title-product"]}>{title}</div>
        <div className={styles["cart-item__price"]}>
          Price: ${(numericPrice * numericAmount).toFixed(2)}
        </div>
      </div>

      <div className={styles["cart-item__action-row"]}>
        <label htmlFor={`amount-${id}`}>Amount:</label>
        <input
          id={`amount-${id}`}
          type="number"
          value={value}
          onChange={handleChange}
          className={styles["cart-item__amount-input"]}
        />
        <button
          className={styles["cart-item__remove-button"]}
          onClick={() => removeAction(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default CartItem;
