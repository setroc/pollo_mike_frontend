import { HomeContainer } from "./containers/"
import { OrdersProvider } from "./context/OrdersContext"

function App() {

  return (
    <OrdersProvider>
      <HomeContainer />
    </OrdersProvider>
  )
}

export default App
