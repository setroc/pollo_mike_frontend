import { useContext, useState } from "react"
import { Grid } from "@mui/material"

import { OrderDetail, OrderDetailProductItem, ProductCard } from "../components"

import { ProductsContext } from "../context/product"
import { IProductInNewOrder } from "../interfaces"

export const OrderContainer = () => {
  const { products } = useContext(ProductsContext);

  const [productsInOrder, setproductsInOrder] = useState<IProductInNewOrder[]>([])

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
          p:
            3,
          overflow:
            'auto',
          height:
            '100%',
          mt: 0
        }}
      >
        {
          products.map( p => (
            <Grid item key={p.id}>
              <ProductCard product={p} setproductsInOrder={setproductsInOrder} />
            </Grid>
          ))
        }
      </Grid>

      <Grid
        item
        xs={8} sm={6} lg={4}
      >
        <OrderDetail productsInOrder={productsInOrder} setproductsInOrder={setproductsInOrder}>
          {
            productsInOrder.map(p => (
              <Grid item xs={12} key={p.id}>
                <OrderDetailProductItem productInOrder={p} setproductsInOrder={setproductsInOrder} />
              </Grid>
            ))
          }
        </OrderDetail>
      </Grid>
    </Grid>
  )
}