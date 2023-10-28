import { createContext } from "react";

import { IOrder } from "../../interfaces";

interface ContextProps {
  orders: IOrder[];
  
  // methods
  addOrder: (order: IOrder) => void;
}
export const OrdersContext = createContext({} as ContextProps);