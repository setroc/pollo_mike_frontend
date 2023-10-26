import { Grid } from "@mui/material"

import { OrderDetail, ProductCard } from "../components"
import { useContext } from "react"
import { ProductsContext } from "../context/product"

export const OrderContainer = () => {
  const { products } = useContext(ProductsContext);
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
              <ProductCard product={p} />
            </Grid>
          ))
        }
      </Grid>

      <Grid
        item
        xs={8} sm={6} lg={4}
      >
        <OrderDetail />
      </Grid>
    </Grid>
  )
}