import { Route, Routes } from "react-router-dom"

import { CurrentOrdersContainer, OrderContainer } from "./containers/"
import { OrdersProvider } from "./context/OrdersContext"
import { ProductsProvider } from "./context/product"

import { MainLayout } from "./layouts"

function App() {

  return (
    <ProductsProvider>
      <OrdersProvider>
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route path="CurrentOrders" element={<CurrentOrdersContainer />} />
            <Route path="NewOrder" element={<OrderContainer />} />
          </Route>
        </Routes>
      </OrdersProvider>
    </ProductsProvider>
  )
}

export default App
