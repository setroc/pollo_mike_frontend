import { Box, Button, ButtonGroup, Card, CardMedia, Typography } from "@mui/material"
import { IProductInNewOrder } from "../../interfaces"
import { FC } from "react";


interface Props {
  productInOrder: IProductInNewOrder;
  setproductsInOrder: React.Dispatch<React.SetStateAction<IProductInNewOrder[]>>
}

export const OrderDetailProductItem : FC<Props> = ({productInOrder, setproductsInOrder}) => {

  const updateQuantity = (quantity : number) => {
    setproductsInOrder((ant) => {
      return ant.map( p => {
        if (p.id === productInOrder.id && p.quantity + quantity > 0 ) p.quantity += quantity;
        return p;
      });
    });
  }

  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 110, height: 110, p: 1, objectFit: 'contain' }}
        image="https://w7.pngwing.com/pngs/203/765/png-transparent-hamburger-with-vegetables-hamburger-slider-hamburger-burger-food-recipe-cheeseburger.png"
        alt="Burguer"
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
            <Button onClick={() => updateQuantity(-1)}> - </Button>
            <Button disabled>{productInOrder.quantity}</Button>
            <Button onClick={() => updateQuantity(1)}> + </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Card>
  )
}
