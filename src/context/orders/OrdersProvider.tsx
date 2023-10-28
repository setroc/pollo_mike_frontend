import { FC, useReducer } from "react";

import { OrdersContext, ordersReducer } from './';

import { IOrder } from "../../interfaces";

export interface OrdersState {
  orders: IOrder[];
}

const ORDERS_INITIAL_STATE : OrdersState = {
  orders: [
    {
      id: 1,
      clientName: 'Juan Perez',
      date: '20-10-2023',
      number: 1,
      products: [
        {
          productId: 1,
          quantity: 2
        }
      ],
      total: 100,
      state: 0
    },
  ]
}

interface Props {
  children: React.ReactNode;
}
export const OrdersProvider : FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer( ordersReducer, ORDERS_INITIAL_STATE);

  const addOrder = (order : IOrder) => {

    return dispatch({ type: '[Orders] Add new order', payload: order });
  }

  return (
    <OrdersContext.Provider value={{
      ...state,

      // methods
      addOrder
    }}>
      {children}
    </OrdersContext.Provider>
  )
}