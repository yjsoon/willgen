import { createContext, useState, useContext } from "react";
import { personTemplate } from "../constants/personTemplate";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [author, setAuthor] = useState({ ...personTemplate });
  const [executors, setExecutors] = useState([{ ...personTemplate }]);
  const [beneficiaries, setBeneficiaries] = useState([{ ...personTemplate }]);

  return (
    <AppContext.Provider
      value={{
        author,
        setAuthor,
        executors,
        setExecutors,
        beneficiaries,
        setBeneficiaries,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export function useAppContext() {
  return useContext(AppContext);
}
