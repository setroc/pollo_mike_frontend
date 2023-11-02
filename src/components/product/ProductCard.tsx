import { FC } from "react"
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

import { IOrder, IProduct } from "../../interfaces"

interface Props {
  product: IProduct;
  setCurrentOrder: React.Dispatch<React.SetStateAction<IOrder>>
}

export const ProductCard : FC<Props> = ({ product, setCurrentOrder }) => {

  const addProductToOrder = () => {
    setCurrentOrder((ant)=>{
      const antP = ant.products.find(p => p.id === product.id);
      if ( !antP ) {
        return {...ant, products: [...ant.products, {...product, quantity: Number(product.stepQuantity) }] }
      }
      return {
        ...ant,
        products: ant.products.map( p => {
          if (p.id === product.id) p.quantity += Number(product.stepQuantity);
          return p;
        })
      }
    });
  }

  return (
    <Card sx={{ maxWidth: 200 }} onClick={addProductToOrder} >
      <CardActionArea>
        <CardMedia 
          component="img"
          sx={{ width: 200, margin: '0 auto' }}
          image={`/img/${product.imgName}`}
          alt={product.description}
        />
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h5" fontSize='1.2rem'>
            {product.title}
          </Typography>
          <Typography gutterBottom variant="body2">
            {product.description}
          </Typography>
          <Typography variant="subtitle1" color="text" >
            $ {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
