import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS } from "../const";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../fireBase";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET:
      return { ...state };

    default:
      return state;
  }
};

const ProductContext = ({children}) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const productCollectionRef = collection(db, "product");

  async function addProduct(newProduct) {
    await addDoc(productCollectionRef, newProduct);
  }

  const values = {
    addProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
