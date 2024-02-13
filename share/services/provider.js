import { createContext, useContext, useState } from "react";

export const globalContext = createContext();

export const useGlobalStore = () => {
  const value = useContext(globalContext);
  return value;
};

const Provider = ({ children }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [offers, setOffers] = useState([]);
  const [restouranData, setRestouranData] = useState([]);
  const [products, setProducts] = useState([]);


  const Component = globalContext.Provider;

  const values = {
    categoryData,
    setCategoryData,
    offers,
    setOffers,
    restouranData,
    setRestouranData,
    products,
    setProducts,
  };

  return <Component value={values}>{children}</Component>;
};

export default Provider;
