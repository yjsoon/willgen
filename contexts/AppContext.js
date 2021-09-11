import { createContext, useState, useContext } from "react";
import useLocalStorage from "use-local-storage";
import { personTemplate } from "../constants/personTemplate";
import { propertyTemplate } from "../constants/propertyTemplate";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [author, setAuthor] = useLocalStorage("author", { ...personTemplate });
  const [executors, setExecutors] = useLocalStorage("executors", [
    { ...personTemplate },
  ]);
  const [beneficiaries, setBeneficiaries] = useLocalStorage("beneficiaries", [
    { ...personTemplate },
  ]);
  const [properties, setProperties] = useLocalStorage("properties", [
    { ...propertyTemplate },
  ]);
  const [moneys, setMoneys] = useLocalStorage("sumOfMoney", [
    { money: "", beneficiary: "" },
  ]);

  return (
    <AppContext.Provider
      value={{
        author,
        setAuthor,
        executors,
        setExecutors,
        beneficiaries,
        setBeneficiaries,
        properties,
        setProperties,
        moneys,
        setMoneys,
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
