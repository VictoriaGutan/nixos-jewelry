import girlImage from "../../assets/girl.jpg";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <section className={styles.landing}>
        <div className={styles["landing__text"]}>
          <h1 className={styles["landing__title"]}>
            Luxury Jewelry <br />
            That Defines You
          </h1>

          <span className={styles["landing__subtitle"]}>
            Discover timeless pieces crafted to perfection
          </span>

          <br />
          <button
            type="button"
            className={styles["landing__cta"]}
            onClick={() => navigate("/shopPage")}
          >
            Shop Now
          </button>
        </div>
        <img
          className={styles["landing__image"]}
          src={girlImage}
          loading="eager"
          decoding="async"
        />
      </section>
      <ProductSlider />
    </main>
  );
};
export default HomePage;
