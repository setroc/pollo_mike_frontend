import { FC } from "react"
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

import { IProduct, IProductInNewOrder } from "../../interfaces"

interface Props {
  product: IProduct;
  setproductsInOrder: React.Dispatch<React.SetStateAction<IProductInNewOrder[]>>
}

export const ProductCard : FC<Props> = ({ product, setproductsInOrder }) => {

  const addProductToOrder = () => {
    setproductsInOrder((ant)=>{
      const antP = ant.find(p => p.id === product.id);
      if (!antP) {
        return [...ant, {...product, quantity: 1}]
      }
      return ant.map( p => {
        if (p.id === product.id) p.quantity++;
        return p;
      })
    });
  }

  return (
    <Card sx={{ maxWidth: 200 }} onClick={addProductToOrder} >
      <CardActionArea>
        <CardMedia 
          component="img"
          sx={{ width: 200, margin: '0 auto' }}
          image="https://w7.pngwing.com/pngs/203/765/png-transparent-hamburger-with-vegetables-hamburger-slider-hamburger-burger-food-recipe-cheeseburger.png"
          alt="Burguer"
        />
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h5">
            {product.title}
          </Typography>
          <Typography gutterBottom variant="body2" textAlign='start'>
            {product.description}
          </Typography>
          <Typography variant="subtitle1" color="text">
            $ {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
