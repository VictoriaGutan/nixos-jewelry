import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import { useUser } from "../../../context/userContext";
import CartItem from "../compinents/CartItem";
import styles from "./CartComponent.module.scss";
const Cart = () => {
  const { cartList, modifyCartList, deleteItem } = useContext(CartContext);
  const { userName } = useUser();

  cartList.forEach((item) => {
    console.log(
      `id: ${item.id}, price:`,
      item.price,
      "amount:",
      item.amount,
      "image",
      item.image
    );
  });
  const totalPrice = cartList
    .reduce((acc, curr) => {
      const amount = Number(curr.amount) || 0;
      const price = Number(curr.price) || 0;
      return acc + amount * price;
    }, 0)
    .toFixed(2);

  return (
    <div className={styles.cart}>
      <div className={styles["cart__title"]}>Your Cart</div>
      {userName && cartList.length > 0 && (
        <div className={styles["cart__user-greeting"]}>
          Hi, {userName} - your cart is ready for checkout!
        </div>
      )}
      {cartList.length <= 0 ? (
        <p className={styles["cart__empty"]}>
          Oops, no items are added to cart, go check our catalogue.
        </p>
      ) : (
        <>
          {cartList.map(({ id, title, price, amount, image }) => (
            <CartItem
              key={id}
              image={image}
              removeAction={deleteItem}
              onChangeAction={modifyCartList}
              id={id}
              title={title}
              price={price}
              amount={amount}
            />
          ))}

          <div className={styles["cart__total"]}>
            Subtotal: {totalPrice}$<div className={styles["cart__line"]}></div>
            <br />
            Total: {(Number(totalPrice) + 50).toFixed(2)}$
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
