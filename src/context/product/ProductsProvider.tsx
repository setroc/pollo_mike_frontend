import { FC, useReducer } from "react";
import { ProductsContext, productsReducer } from ".";
import { IProduct } from "../../interfaces";

export interface ProductState {
  products : IProduct[];
}

const PRODUCTS_INITIAL_STATE : ProductState = {
  products: [
    {
      id: 1,
      description: 'Pollo asado al carbón',
      title: 'Pollo asado',
      price: 200
    }
  ]
}

interface Props {
  children : React.ReactNode;
}

export const ProductsProvider : FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(productsReducer, PRODUCTS_INITIAL_STATE);

  return (
    <ProductsContext.Provider value={{
      ...state,
    }}>
      { children }
    </ProductsContext.Provider>
  )
}