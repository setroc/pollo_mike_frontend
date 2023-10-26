import { FC, useEffect, useReducer } from "react";
import { ProductsContext, productsReducer } from ".";
import { IProduct } from "../../interfaces";

export interface ProductState {
  products : IProduct[];
}

const PRODUCTS_INITIAL_STATE : ProductState = {
  products: []
}

interface Props {
  children : React.ReactNode;
}

export const ProductsProvider : FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(productsReducer, PRODUCTS_INITIAL_STATE);

  useEffect(()=> {
    fetch('http://localhost:3000/api/products/all')
    .then(res => res.json())
    .then(body => dispatch({ type: '[Products] Load all products from api', payload: body}))
  },[])

  return (
    <ProductsContext.Provider value={{
      ...state,
    }}>
      { children }
    </ProductsContext.Provider>
  )
}