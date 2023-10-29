import { FC, useEffect, useReducer } from "react";

import { OrdersContext, ordersReducer } from './';

import { IOrder } from "../../interfaces";

export interface OrdersState {
  orders: IOrder[];
}

const ORDERS_INITIAL_STATE : OrdersState = {
  orders: []
}

interface Props {
  children: React.ReactNode;
}
export const OrdersProvider : FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer( ordersReducer, ORDERS_INITIAL_STATE);

  useEffect(()=> {
    fetch(`http://localhost:3000/api/orders/all?date=2023-10-28`)
    .then(res => res.json())
    .then(body => dispatch({ type: '[Orders] Load orders', payload: body}))
  },[])

  const addOrder = async (order : IOrder) => {
    try {
      const res = await fetch('http://localhost:3000/api/orders/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
      if (res.ok) {
        const body : IOrder = await res.json();
        dispatch({type: '[Orders] Add new order', payload: body});
        return {ok: true, msg: 'Orden añadida correctamente.'};
      } else {
        const body = await res.json();
        console.log(body.message);
        return {ok: false, msg: 'Error al añadir la order.'};
      }
    } catch ( error ) {
      console.error(error);
      return {ok: false, msg: 'Error al añadir la order.'};
    }
  }

  const updateOrder = async ( order: IOrder) => {
    try {
      const res = await fetch(`http://localhost:3000/api/orders/edit/${order.id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...order,products:order.orderToProduct}),
      });
      if (res.ok) {
        const body : IOrder = await res.json();
        dispatch({type: '[Orders] Update order', payload: body});
        return {ok: true, msg: 'Orden actualizada correctamente.'};
      } else {
        const body = await res.json();
        console.log(body.message);
        return {ok: false, msg: 'Error al actualizar la orden.'};
      }
    } catch ( error ) {
      console.error(error);
      return {ok: false, msg: 'Error al actualizar la orden.'};
    }
  }

  const deleteOrder = async (orderId:number) => {
    try {
      const res = await fetch(`http://localhost:3000/api/orders/delete/${orderId}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        dispatch({type: '[Orders] Delete order', payload: orderId});
        return {ok: true, msg: 'Orden eliminada correctamente.'};
      } else {
        const body = await res.json();
        console.log(body.message);
        return {ok: false, msg: 'Error al eliminar la orden.'};
      }
    } catch ( error ) {
      console.error(error);
      return {ok: false, msg: 'Error al eliminar la orden.'};
    }
  }

  const getOrderById = (id: number) => {
    return state.orders.filter(o=>o.id === id)[0];
  }

  return (
    <OrdersContext.Provider value={{
      ...state,

      // methods
      getOrderById,
      addOrder,
      updateOrder,
      deleteOrder
    }}>
      {children}
    </OrdersContext.Provider>
  )
}