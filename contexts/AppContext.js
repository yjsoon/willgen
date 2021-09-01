import { createContext, useState, useContext } from "react";
import { personTemplate } from "../constants/personTemplate";

export const AppContext = createContext();

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
