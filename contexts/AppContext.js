import { createContext, useState, useContext } from "react";

export const AppContext = createContext();

const AppContext = ({ children }) => {
  const [author, setAuthor] = useState({
    name: "",
    gender: "",
    idType: "",
    id: "",
    address1: "",
    address2: "",
    country: "",
    postal: "",
  });

  return (
    <AppContext.Provider value={{ author }}>{children}</AppContext.Provider>
  );
};

export default AppContext;

export function useAppContext() {
  return useContext(AppContext);
}
