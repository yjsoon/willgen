import { createContext, useState, useContext } from "react";

export const AppContext = createContext();

export const personTemplate = {
  name: "Banana",
  gender: "",
  idType: "",
  id: "",
  address1: "",
  address2: "",
  country: "",
  postal: "",
};

const AppContextProvider = ({ children }) => {
  const [author, setAuthor] = useState({ ...personTemplate });
  const [executors, setExecutors] = useState([{ ...personTemplate }]);
  const [beneficiaries, setBeneficaries] = useState([{ ...personTemplate }]);

  return (
    <AppContext.Provider value={{ author, setAuthor }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export function useAppContext() {
  return useContext(AppContext);
}
