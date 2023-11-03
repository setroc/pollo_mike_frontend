import { useContext, useState } from "react"
import { Grid } from "@mui/material"

import { OrderDetail, ProductCard } from "../components"

import { ProductsContext } from "../context/product"
import { IOrder } from "../interfaces"

export const OrderContainer = () => {
  
  const { products } = useContext(ProductsContext);

  const [currentOrder, setCurrentOrder] = useState<IOrder>({
    id:0,
    clientName: '',
    date: '',
    number: 0,
    products: [],
    state: 1,
    total: 0
  });

  return (
    <Grid container
      sx={{
        flex: 1,
        overflow: 'hidden',
      }}
    >
      <Grid
        container item
        xs={4} sm={6} lg={8}
        spacing={2}
        justifyContent='center'
        sx={{
          backgroundColor: '#f1f5fe',
          p: 3,
          overflow: 'auto',
          height: '100%',
          mt: 0
        }}
      >
        {
          products.map( p => (
            <Grid item key={p.id}>
              <ProductCard product={p} setCurrentOrder={setCurrentOrder} />
            </Grid>
          ))
        }
      </Grid>

      <Grid container item xs={8} sm={6} lg={4}
        sx={{
          backgroundColor: '#ffffff',
          p: 3,
          overflow: 'auto',
          height: '100%',
          mt: 0
        }}
      >
        <OrderDetail currentOrder={currentOrder} setCurrentOrder={setCurrentOrder} />
      </Grid>
    </Grid>
  )
}