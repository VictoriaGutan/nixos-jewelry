import { createContext, useState } from "react";

export const ProductContext = createContext([]);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log("Error fetching ptoducts:", error));
  };
  const getProduct = (id) => {
    return products.find((item) => Number(item.id) === Number(id));
  };
  return (
    <ProductContext.Provider value={{ products, getProducts, getProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
