import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

export const ProductCard = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          sx={{ width: 200, margin: '0 auto' }}
          image="https://w7.pngwing.com/pngs/203/765/png-transparent-hamburger-with-vegetables-hamburger-slider-hamburger-burger-food-recipe-cheeseburger.png"
          alt="Burguer"
        />
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h5" component="div">
            Pollo Asado al carbón
          </Typography>
          <Typography variant="subtitle1" color="text">
            $200
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
