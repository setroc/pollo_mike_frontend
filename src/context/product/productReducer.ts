import { ProductState } from "."

type ProductsActionType = 
  | { type: '[Products] Get all products' }

export const productsReducer = (state: ProductState, action: ProductsActionType) => {
  switch(action.type) {
    case '[Products] Get all products':
      return {
        ...state
      }
  }
}