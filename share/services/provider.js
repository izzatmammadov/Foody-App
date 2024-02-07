import { createContext, useContext, useState } from "react";

export const globalContext = createContext();

export const useGlobalStore = () => {
  const value = useContext(globalContext);
  return value;
};

const Provider = ({ children }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [offers, setOffers] = useState([]);

  const Component = globalContext.Provider;

  const values = {
    categoryData,
    setCategoryData,
    offers,
    setOffers,
  };

  return <Component value={values}>{children}</Component>;
};

export default Provider;
