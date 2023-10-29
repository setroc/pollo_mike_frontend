import { OrdersState } from "."
import { IOrder } from "../../interfaces"

// REDUCER
type OrdersActionType = 
  | { type: '[Orders] Add new order', payload: IOrder }
  | { type: '[Orders] Update order', payload: IOrder }
  | { type: '[Orders] Delete order', payload: number }
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
    case '[Orders] Update order':
      return {
        ...state,
        orders: state.orders.map( o => {
          if (o.id === action.payload.id) {
            return action.payload;
          }
          return o;
        })
      }
    case '[Orders] Delete order':
      return {
        ...state,
        orders: state.orders.filter(o=>o.id !== action.payload)
      }
  }

}