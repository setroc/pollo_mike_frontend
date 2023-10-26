import { createContext } from "react";

import { IProduct } from "../../interfaces";

interface ContextProps {
  products : IProduct[];

  // methods
}
export const ProductsContext = createContext({} as ContextProps);