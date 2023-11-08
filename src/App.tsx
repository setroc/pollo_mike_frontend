import { Navigate, Route, Routes } from "react-router-dom"

import { OrderContainer, OrdersContainer } from "./containers/"
import { OrdersProvider } from "./context/orders"
import { ProductsProvider } from "./context/product"

import { MainLayout, GenericLayout } from "./layouts"
import { CreateStock, CurrentStock } from "./components"

function App() {

  return (
    <ProductsProvider>
      <OrdersProvider>
        <Routes>
          <Route path="/" >
            <Route index element={<MainLayout />} />

            <Route path="Orders" element={<GenericLayout />}>
              <Route path="LayawayOrders" element={<OrdersContainer state={0} />} />
              <Route path="CurrentOrders" element={<OrdersContainer state={1} />} />
              <Route path="PastOrders" element={<OrdersContainer state={2} />} />
              <Route path="NewOrder" element={<OrderContainer />} />
              <Route path="EditOrder" element={<OrderContainer />} />
              <Route path="*" element={<Navigate to='/Orders/CurrentOrders' />} />
            </Route>

            <Route path="Stock" element={<GenericLayout />}>
              <Route path='CurrentStock' element={<CurrentStock />} />
              <Route path='CreateStock' element={<CreateStock />} />
              {/* <Route path="NewStock" element={<OrdersContainer state={0} />} />
              <Route path="CurrentOrders" element={<OrdersContainer state={1} />} />
              <Route path="PastOrders" element={<OrdersContainer state={2} />} />
              <Route path="NewOrder" element={<OrderContainer />} />
              <Route path="EditOrder" element={<OrderContainer />} />
              <Route path="*" element={<Navigate to='/Orders/CurrentOrders' />} /> */}
            </Route>

            <Route path="Products" element={<GenericLayout />}>
              {/* <Route path="NewStock" element={<OrdersContainer state={0} />} />
              <Route path="CurrentOrders" element={<OrdersContainer state={1} />} />
              <Route path="PastOrders" element={<OrdersContainer state={2} />} />
              <Route path="NewOrder" element={<OrderContainer />} />
              <Route path="EditOrder" element={<OrderContainer />} />
              <Route path="*" element={<Navigate to='/Orders/CurrentOrders' />} /> */}
            </Route>
            
            
            <Route path="*" element={<Navigate to='/' />} />
          </Route>
        </Routes>
      </OrdersProvider>
    </ProductsProvider>
  )
}

export default App
