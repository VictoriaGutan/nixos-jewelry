import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList));
  }, [cartList]);

  const handleAddToCart = (newItem) => {
    if (
      !newItem ||
      newItem.id == null ||
      !newItem.title ||
      Number.isNaN(Number(newItem.price))
    ) {
      console.warn("Rejected invalid cart item:", newItem);
      return;
    }

    console.log("handleAddToCart received:", newItem);
    const isNewItem = cartList.some((item) => item.id === newItem.id);
    if (isNewItem) {
      setCartList((prevState) => {
        return prevState.map((product) => {
          if (product.id === newItem.id) {
            return {
              ...product,
              amount: product.amount + (newItem.amount || 1),
            };
          }
          return product;
        });
      });
    } else {
      setCartList((prevState) => [
        ...prevState,
        { ...newItem, amount: newItem.amount || 1 },
      ]);
    }
  };

  const modifyCartList = (id, amount) => {
    setCartList((prevState) => {
      return prevState.map((item) => {
        return { ...item, amount: item.id === id ? amount : item.amount };
      });
    });
  };

  const deleteItem = (id) => {
    setCartList((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  return (
    <CartContext.Provider
      value={{ cartList, handleAddToCart, deleteItem, modifyCartList }}
    >
      {children}
    </CartContext.Provider>
  );
};
