import "./styles.css";
import CartIcon from "../../assets/shopping-bag.png";
import leftArrow from "../../assets/left-chevron.png";
import rightArrow from "../../assets/chevron.png";
import favourite from "../../assets/favourite.png";
import account from "../../assets/user.png";
const IconSize = {
  sm: "icon-sm",
  md: "icon-md",
  lg: "icon-lg",
  xl: "icon-xl",
};

const IconName = {
  cart: CartIcon,
  leftArrow: leftArrow,
  rightArrow: rightArrow,
  favourites: favourite,
  user: account,
};

const Icon = ({ size, name, onClick, className = "" }) => {
  return (
    <img
      src={IconName[name]}
      alt={name}
      className={`${IconSize[size]} ${className}`}
      onClick={onClick}
    />
  );
};
export default Icon;
