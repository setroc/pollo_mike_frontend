import { Box, Button, ButtonGroup, Card, CardMedia, Typography } from "@mui/material"

export const OrderDetailProductItem = () => {
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
          Pollo asado al carbon
        </Typography>
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <Typography variant='subtitle1' sx={{ alignSelf: 'flex-end' }}>
            $200
          </Typography>

          <ButtonGroup variant="outlined" size="large" aria-label="outlined primary button group">
            <Button> - </Button>
            <Button disabled>0.0</Button>
            <Button> + </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Card>
  )
}
