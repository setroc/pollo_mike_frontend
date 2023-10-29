import { createContext } from "react";

import { IOrder } from "../../interfaces";

interface ContextProps {
  orders: IOrder[];
  
  // methods
  addOrder: (order: IOrder) => Promise<{ok: boolean, msg: string}>;
  getOrderById: (id: number) => IOrder;
  updateOrder: (order: IOrder) => Promise<{ok: boolean, msg: string}>;
}
export const OrdersContext = createContext({} as ContextProps);