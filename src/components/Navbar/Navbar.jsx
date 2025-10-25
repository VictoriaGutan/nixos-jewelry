import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.scss";
import path from "../../constants";
import Icon from "../Icon";
import { useWishList } from "../../context/wishListContext";
import UserModal from "../UserModal/UserModal";
import { useUser } from "../../context/userContext";
const Navbar = () => {
  const { wishList } = useWishList();
  const { userName, setUserName } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (data) => {
    setUserName(data.name);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles["navbar__list"]}>
          <Link to={path.homePage} className={styles["navbar__link"]}>
            Home
          </Link>
          <Link to={path.shopPage} className={styles["navbar__link"]}>
            Shop
          </Link>
        </div>

        <div className={styles["navbar__title"]}>
          <div>Nixo"S </div>
        </div>
        <div className={styles["navbar__icons"]}>
          <Link to={path.cart} className={styles["navbar__icon"]}>
            <Icon name="cart" size="lg" />
          </Link>

          <Link
            to={path.favourites}
            className={`${styles.navbar__icon} ${styles["navbar__icon--wishlist"]}`}
          >
            <Icon name="favourites" size="lg" />
            {wishList.length > 0 && (
              <span className={styles["navbar__badge"]}>{wishList.length}</span>
            )}
          </Link>

          <Icon
            name="user"
            size="lg"
            onClick={() => {
              setIsModalOpen(true);
            }}
            className={styles["navbar__icon"]}
          />
        </div>

        <UserModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleFormSubmit}
        />
      </nav>
    </>
  );
};
export default Navbar;
