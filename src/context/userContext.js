import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState(() => {
    const savedUser = localStorage.getItem("newsletterUser");
    return savedUser ? JSON.parse(savedUser).name : "";
  });

  useEffect(() => {
    if (userName) {
      localStorage.setItem(
        "newsletterUser",
        JSON.stringify({ name: userName })
      );
    }
  }, [userName]);

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
