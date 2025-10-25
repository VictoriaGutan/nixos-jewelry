import { useState } from "react";
import { useWishList } from "../../context/wishListContext";
import Icon from "../Icon";
import Input from "../Input";
import styles from "./Card.module.scss";
import AddToCartButton from "../Buttons/AddToCartButton";

const Card = ({ title, image, price, id, iconOnClick, amount = 1 }) => {
  const { handleAddToWishList} = useWishList();
  const [value, setValue] = useState(amount);

  const handleChangeAmount = (option) => {
    if (option === "ADD") {
      setValue((prevState) => {
        return prevState + 1;
      });
    } else {
      setValue((prevState) => {
        return prevState > 1 ? prevState - 1 : 1;
      });
    }
  };

  return (
    <div className={styles["card"]}>
      <div
        className={styles["card__fav-icon"]}
        onClick={(e) => {
          e.stopPropagation();
          handleAddToWishList({
            title,
            id,
            image,
            price: Number(price) || 0,
            amount: Number(value) || 1,
          });
        }}
      >
        <Icon name="favourites" size="md" />
      </div>

      <img src={image} alt={`${title}`} className={styles["card__image"]} />
      <h1 className={styles["card__title"]}>{title}</h1>
      <div className={styles["card__footer"]}>
        <p className={styles["card__price"]}>{price}$</p>

        <div
          onClick={(e) => e.stopPropagation()}
          className={styles["card__input-group"]}
        >
          <div className={styles["card__arrow"]} onClick={handleChangeAmount}>
            -
          </div>
          <Input
            className={styles["card__input"]}
            value={value}
            onChange={setValue}
            type="number"
            id={`amount-${id}`}
          />
          <div
            className={styles["card__arrow"]}
            onClick={() => handleChangeAmount("ADD")}
          >
            +
          </div>
        </div>
        <div
          className={styles["card__cart-button"]}
          onClick={(e) => {
            e.stopPropagation();
            if (typeof iconOnClick === "function") {
              iconOnClick(value);
            }
            setValue(1);
          }}
        >
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};
export default Card;
