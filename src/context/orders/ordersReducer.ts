import { OrdersState } from "."
import { IOrder } from "../../interfaces"

// REDUCER
type OrdersActionType = 
  | { type: '[Orders] Add new order', payload: IOrder }
  | { type: '[Orders] Load orders', payload: IOrder[] }

export const ordersReducer = (state: OrdersState, action: OrdersActionType) : OrdersState => {
  switch(action.type) {
    case '[Orders] Add new order': 
      return {
        ...state,
        orders: [...state.orders, action.payload]
      }
    case '[Orders] Load orders':
      return {
        ...state,
        orders: [...action.payload]
      }
  }

}