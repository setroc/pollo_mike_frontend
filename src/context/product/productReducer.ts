import { ProductState } from "."
import { IProduct } from "../../interfaces"

type ProductsActionType = 
  | { type: '[Products] Get all products' }
  | { type: '[Products] Load all products from api', payload: IProduct[] }

export const productsReducer = (state: ProductState, action: ProductsActionType) : ProductState => {
  switch(action.type) {
    case '[Products] Get all products':
      return {
        ...state
      }
    case '[Products] Load all products from api':
      return {
        ...state,
        products: [...action.payload]
      }
    
  }
}