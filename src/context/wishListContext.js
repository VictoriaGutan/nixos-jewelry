import { createContext, useState, useContext, useEffect } from "react";

export const WishListContext = createContext();
export const useWishList = () => useContext(WishListContext);

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState(() => {
    const savedWishList = localStorage.getItem("wishList");
    return savedWishList ? JSON.parse(savedWishList) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  const handleAddToWishList = (newItem) => {
    setWishList((prev) => {
      const exists = prev.some((item) => item.id === newItem.id);
      if (exists) return prev;
      return [
        ...prev,
        {
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image || newItem.img || "",
          amount: newItem.amount || 1,
        },
      ];
    });
  };

  const removeFromWishList = (id) => {
    setWishList((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <WishListContext.Provider
      value={{ wishList, handleAddToWishList, removeFromWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
};
