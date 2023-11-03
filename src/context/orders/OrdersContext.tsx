import { createContext } from "react";

import { IOrder } from "../../interfaces";

interface ContextProps {
  orders: IOrder[];
  
  // methods
  addOrder: (order: IOrder) => Promise<{ok: boolean, msg: string}>;
  updateOrder: (order: IOrder) => Promise<{ok: boolean, msg: string}>;
  deleteOrder: (orderId: number) => Promise<{ok: boolean, msg: string}>;
  getOrderById: (id: number) => IOrder;
  changeOrderState: (orderId: number, state: number) => Promise<{ok: boolean, msg: string}>;
}
export const OrdersContext = createContext({} as ContextProps);