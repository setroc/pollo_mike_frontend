import { Box, Button, ButtonGroup, Card, CardMedia, Divider, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material"
import { NavigationBar, ProductCard } from "../components"
import { AccountCircle, ConfirmationNumber } from "@mui/icons-material"


export const Home = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <NavigationBar />

      <Grid container sx={{ flex: 1 }} >
        <Grid item xs={4} sm={6} lg={8} sx={{ backgroundColor: '#f1f5fe', p: 3 }}>
          <ProductCard />
        </Grid>
        <Grid item xs={8} sm={6} lg={4} sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div>
            <Typography variant='h6'>
              Detalle de la orden
            </Typography>

            <div>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="clientName">Nombre del cliente</InputLabel>
                <OutlinedInput 
                  required
                  label="Nombre del cliente"
                  size="small"
                  id="clientName"
                  startAdornment = {
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl fullWidth sx={{ mt: 1 }} variant="outlined">
                <InputLabel htmlFor="ticketNumber">Turno</InputLabel>
                <OutlinedInput 
                  label="Turno"
                  size="small"
                  id="ticketNumber"
                  startAdornment = {
                    <InputAdornment position="start">
                      <ConfirmationNumber />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
          </div>

          <Typography variant='body1'>
            Productos
          </Typography>
          
          <Card sx={{ display: 'flex'}}>

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
          

          <Typography variant='body1'>
            Resumen
          </Typography>

          <Box sx={{ backgroundColor: '#eaeef7', borderRadius: 1, p: 2}}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='body2'>
                Pollo asado al carbon
              </Typography>
              <Typography variant='body2'>
                $ 200.00
              </Typography>
            </Box>

            <Divider sx={{ my: 2}} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='body2'>
                Total: 
              </Typography>
              <Typography variant='body2'>
                $ 200.00
              </Typography>
            </Box>
          </Box>

          <Button fullWidth variant="contained" size="large">
            Agregar orden
          </Button>


        </Grid>

      </Grid>


      {/* 
      <Grid container sx={{ p: 3, justifyContent: 'center' }} spacing={3}>
        <Grid item>
          <ProductCard />
        </Grid>
        <Grid item>
          <ProductCard />
        </Grid>
        <Grid item>
          <ProductCard />
        </Grid>
        <Grid item>
          <ProductCard />
        </Grid>
        <Grid item>
          <ProductCard />
        </Grid>
        <Grid item>
          <ProductCard />
        </Grid>
        <Grid item>
          <ProductCard />
        </Grid>
        <Grid item>
          <ProductCard />
        </Grid>
        <Grid item>
          <ProductCard />
        </Grid>
        <Grid item>
          <ProductCard />
        </Grid>

        <Grid item>
          <ProductCard />
        </Grid>
        <Grid item>
          <ProductCard />
        </Grid>
        <Grid item>
          <ProductCard />
        </Grid>
        <Grid item>
          <ProductCard />
        </Grid>
        <Grid item>
          <ProductCard />
        </Grid>
        <Grid item>
          <ProductCard />
        </Grid>
        <Grid item>
          <ProductCard />
        </Grid>
        <Grid item>
          <ProductCard />
        </Grid>
        <Grid item>
          <ProductCard />
        </Grid>
        <Grid item>
          <ProductCard />
        </Grid>

      </Grid>
      <Box>
          <ProductCard />

      </Box> */}
    </Box>
  )
}
