import { FC } from "react";
import { Divider, Grid, Typography } from "@mui/material";

import { IProductInOrder } from "../../interfaces"

interface Props {
  products: IProductInOrder[];
}
export const ResumeDetail : FC<Props> = ({ products }) => {
  if ( products.length === 0 ) {
    return (
      <Grid container sx={{ backgroundColor: '#eaeef7', borderRadius: 1, p: 2 }}>
        <Typography variant="body1">
          Sin productos
        </Typography>
      </Grid>
    )
  }
  return (
    <Grid container sx={{ backgroundColor: '#eaeef7', borderRadius: 1, p: 2 }}>
      {
        products.map( p=> (
          <Grid container item xs={12} justifyContent="space-between" key={p.id}>
            <Grid item>
              <Typography variant='body2'>
                {p.title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body2'>
                $ {p.price} x {p.quantity} = $ {p.price * p.quantity} 
              </Typography>
            </Grid>
          </Grid>
        ))
      }

      <Grid item xs={12} sx={{ my: 2 }} >
        <Divider />
      </Grid>

      <Grid container item xs={12} justifyContent="space-between">
        <Grid item>
          <Typography variant='body2' fontWeight='bold'>
            Total
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body2'>
            $ {products.reduce((a,b)=> a + (b.quantity*b.price),0)}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
