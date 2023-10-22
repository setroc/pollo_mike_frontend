import { Button, Container, Divider, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material"
import { AccountCircle, ConfirmationNumber } from "@mui/icons-material"
import { OrderDetailProductItem } from "."

export const OrderDetail = () => {
  return (
    <Container fixed>
      <Typography sx={{ my: 2 }} variant='h5'>
        Detalle de la orden
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="clientName">Nombre del cliente</InputLabel>
            <OutlinedInput
              required
              label="Nombre del cliente"
              size="small"
              id="clientName"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}> 
          <FormControl fullWidth sx={{ mt: 1 }} variant="outlined">
            <InputLabel htmlFor="ticketNumber">Turno</InputLabel>
            <OutlinedInput
              label="Turno"
              size="small"
              id="ticketNumber"
              startAdornment={
                <InputAdornment position="start">
                  <ConfirmationNumber />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>

      <Typography variant='h6' fontWeight='normal' sx={{ my: 2 }}>
        Productos
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} >
          <OrderDetailProductItem />
        </Grid>
        <Grid item xs={12} >
          <OrderDetailProductItem />
        </Grid>
      </Grid>

      <Typography variant='h6' fontWeight='normal' sx={{ my: 2 }}>
        Resumen
      </Typography>

      <Grid container sx={{ backgroundColor: '#eaeef7', borderRadius: 1, p: 2 }}>

        <Grid container item xs={12} justifyContent="space-between">
          <Grid item>
            <Typography variant='body2'>
              Pollo asado al carbon
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body2'>
              $ 200.00
            </Typography>
          </Grid>
        </Grid>

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
              $ 200.00
            </Typography>
          </Grid>
        </Grid>

      </Grid>

      <Button fullWidth variant="contained" size="large" sx={{ my: 2 }} >
        Agregar orden
      </Button>

    </Container>
  )
}
