import { Route, Routes } from "react-router-dom"

import { OrderContainer, OrdersContainer } from "./containers/"
import { OrdersProvider } from "./context/orders"
import { ProductsProvider } from "./context/product"

import { MainLayout } from "./layouts"

function App() {

  return (
    <ProductsProvider>
      <OrdersProvider>
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route path="LayawayOrders" element={<OrdersContainer state={0} />} />
            <Route path="CurrentOrders" element={<OrdersContainer state={1} />} />
            <Route path="PastOrders" element={<OrdersContainer state={2} />} />
            <Route path="NewOrder" element={<OrderContainer />} />
            <Route path="EditOrder" element={<OrderContainer />} />
          </Route>
        </Routes>
      </OrdersProvider>
    </ProductsProvider>
  )
}

export default App
