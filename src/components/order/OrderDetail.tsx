import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Alert, Button, Container, FormControl, FormControlLabel, Grid, InputAdornment, InputLabel, OutlinedInput, Snackbar, Switch, Typography } from "@mui/material"
import { AccountCircle, ConfirmationNumber } from "@mui/icons-material"

import { OrdersContext } from "../../context/orders";

import { ResumeDetail } from "./ResumeDetail";
import { OrderDetailProductItem } from "./OrderDetailProductItem";

import { IOrder } from "../../interfaces";
import { getDate } from "../../utils";

interface Props {
  currentOrder: IOrder;
  setCurrentOrder: React.Dispatch<React.SetStateAction<IOrder>>
}

export const OrderDetail : FC<Props> = ({ currentOrder, setCurrentOrder }) => {
  
  const [searchParams] = useSearchParams();
  const { addOrder, getOrderById, updateOrder }  = useContext(OrdersContext);

  useEffect(()=> {
    if (searchParams.get('id') === null) return;
    const order = getOrderById(Number(searchParams.get('id')));
    setCurrentOrder(order);
  },[getOrderById,searchParams,setCurrentOrder]);

  const handleInputChange = (e : ChangeEvent<HTMLInputElement>) => {
    setCurrentOrder({...currentOrder, [e.target.id]: e.target.value});
  }
  const handleSwitchChange = (e : ChangeEvent<HTMLInputElement>) => {
    setCurrentOrder({...currentOrder, state: e.target.checked ? 0 : 1});
  }

  const createUptdateOrden = async () => {
    if (searchParams.get('id') === null) { // create
      const { ok, msg } = await addOrder({
        ...currentOrder,
        date: getDate(),
        total: currentOrder.products.reduce((a,b)=> a + (b.quantity*b.price),0),
        id: 0
      });
      if (ok) {
        setCurrentOrder({
          clientName: '',
          products: [],
          date: '',
          id: 0,
          number: 0,
          state: 0,
          total: 0
        })
      }
      setResponse({ok, msg, open: true});
    } else { // update
      const {ok, msg} = await updateOrder({
        ...currentOrder,
        total: currentOrder.products.reduce((a,b)=> a + (b.quantity*b.price),0),
      });
      if (ok) {
        setCurrentOrder({
          clientName: '',
          products: [],
          date: '',
          id: 0,
          number: 0,
          state: 0,
          total: 0
        })
      }
      setResponse({ok, msg, open: true});
    }
  }

  const [response, setResponse] = useState({ok: false, msg: '', open: false});
  const handleCloseSnackbar = () => {
    setResponse({ok: false, msg: '', open: false});
  }
  
  return (
    <>
      <Snackbar open={response.open} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} onClose={handleCloseSnackbar}>
        <Alert severity={response.ok ? 'success' : 'error'} sx={{ width: '100%' }}>
          {response.msg}
        </Alert>
      </Snackbar>


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
                onChange={handleInputChange}
                value={currentOrder.clientName}
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
              <InputLabel htmlFor="number">Turno</InputLabel>
              <OutlinedInput
                label="Turno"
                size="small"
                id="number"
                onChange={handleInputChange}
                value={currentOrder.number}
                startAdornment={
                  <InputAdornment position="start">
                    <ConfirmationNumber />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}> 
            <FormControlLabel 
              control={
                <Switch 
                  name="state"
                  onChange={handleSwitchChange} 
                  checked={!currentOrder.state} 
                />
              } 
              label="Apartado" 
            />
          </Grid>
          
        </Grid>

        <Typography variant='h6' fontWeight='normal' sx={{ my: 2 }}>
          Productos
        </Typography>

        <Grid container spacing={2}>
          {
            currentOrder.products.map((p)=> (
              <Grid item xs={12} key={p.id}>
                <OrderDetailProductItem productInOrder={p} setCurrentOrder={setCurrentOrder} />
              </Grid>
            ))
          }
        </Grid>

        <Typography variant='h6' fontWeight='normal' sx={{ my: 2 }}>
          Resumen
        </Typography>

        <ResumeDetail products={currentOrder.products}/>
       
        <Button fullWidth variant="contained" size="large" sx={{ my: 2 }} onClick={createUptdateOrden}>
          { searchParams.get('id') === null ? 'Agregar orden' : 'Actualizar orden' }
        </Button>

      </Container>
    </>
  )
}
