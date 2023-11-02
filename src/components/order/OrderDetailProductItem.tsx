import { Box, Button, ButtonGroup, Card, CardMedia, Typography } from "@mui/material"
import { IOrder, IProductInOrder } from "../../interfaces"
import { FC } from "react";


interface Props {
  productInOrder: IProductInOrder;
  setCurrentOrder: React.Dispatch<React.SetStateAction<IOrder>>
}

export const OrderDetailProductItem : FC<Props> = ({productInOrder, setCurrentOrder}) => {

  const updateQuantity = (quantity : number) => {
    setCurrentOrder((ant) => {
      return {
        ...ant,
        products: ant.products.map( p => {
          if (p.id === productInOrder.id && p.quantity + quantity > 0 ) p.quantity += quantity;
          return p;
        })
      }
    });
  }

  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 110, height: 110, p: 1, objectFit: 'contain' }}
        image={`/img/${productInOrder.imgName}`}
        alt={productInOrder.description}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', p: 2, justifyContent: 'space-between', width: '100%' }}>
        <Typography variant='h6'>
          {productInOrder.title}
        </Typography>
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <Typography variant='subtitle1' sx={{ alignSelf: 'flex-end' }}>
            $ {productInOrder.price}
          </Typography>

          <ButtonGroup variant="outlined" size="large" aria-label="outlined primary button group">
            <Button onClick={() => updateQuantity(Number(productInOrder.stepQuantity)*-1)}> - </Button>
            <Button disabled>{productInOrder.quantity}</Button>
            <Button onClick={() => updateQuantity(Number(productInOrder.stepQuantity))}> + </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Card>
  )
}
