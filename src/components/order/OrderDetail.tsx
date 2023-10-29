import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { Alert, Button, Container, Divider, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, Snackbar, Typography } from "@mui/material"
import { AccountCircle, ConfirmationNumber } from "@mui/icons-material"

import { IProductInNewOrder } from "../../interfaces";
import { OrdersContext } from "../../context/orders";
import { useSearchParams } from "react-router-dom";


interface detailState {
  clientName : string;
  number: number;
}

interface Props {
  children: React.ReactNode;
  productsInOrder: IProductInNewOrder[];
  setproductsInOrder: React.Dispatch<React.SetStateAction<IProductInNewOrder[]>>
}
export const OrderDetail : FC<Props> = ({ children, productsInOrder, setproductsInOrder }) => {

  const { addOrder, getOrderById, updateOrder }  = useContext(OrdersContext);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(()=> {
    if (searchParams.get('id') === null) return;
    const order = getOrderById(Number(searchParams.get('id')));
    const productsInOrder = order.orderToProduct.map( op=> {
      return  {
        id: Number(op.product!.id),
        title: op.product!.title,
        price: Number(op.product!.price),
        description: op.product!.description,
        stepQuantity: Number(op.product!.stepQuantity),
        quantity: Number(op.quantity)}
    });
    setproductsInOrder(productsInOrder);
    setNewOrderDetail({
      clientName: order.clientName,
      number: order.number
    })

  },[getOrderById,searchParams,setproductsInOrder]);


  const [newOrderDetail, setNewOrderDetail] = useState<detailState>({
    clientName: '',
    number: 0,
  });

  const [response, setResponse] = useState({ok: false, msg: '', open: false});

  const handleInputChange = (e : ChangeEvent<HTMLInputElement>) => {
    setNewOrderDetail({...newOrderDetail, [e.target.id]: e.target.value});
  }

  const createUptdateOrden = async () => {
    const products = productsInOrder.map( (p) => {
      return {
        productId: p.id,
        quantity: p.quantity
      }
    });
    if (searchParams.get('id') === null) { // create
      const fecha = new Date();
      const dia = String(fecha.getDate()).padStart(2, '0'); // Obtiene el día y lo rellena con 0 si es necesario
      const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // El mes está basado en 0, por lo que sumamos 1
      const anio = fecha.getFullYear();
      const { ok, msg } = await addOrder({
        clientName: newOrderDetail.clientName,
        number: Number(newOrderDetail.number),
        id: 0,
        total: productsInOrder.reduce((a,b)=> a + (b.quantity*b.price),0),
        date: `${anio}-${mes}-${dia}`,
        state: 0,
        orderToProduct: products
      });
      setResponse({ok, msg, open: true});
    } else { // update
      const order = getOrderById(Number(searchParams.get('id')));
      const {ok, msg} = await updateOrder({
        ...order,
        clientName: newOrderDetail.clientName,
        number: Number(newOrderDetail.number),
        total: productsInOrder.reduce((a,b)=> a + (b.quantity*b.price),0),
        orderToProduct: products
      });
      setResponse({ok, msg, open: true});
    }
  }

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
                value={newOrderDetail.clientName}
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
                value={newOrderDetail.number}
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
          { children }
        </Grid>

        <Typography variant='h6' fontWeight='normal' sx={{ my: 2 }}>
          Resumen
        </Typography>

        <Grid container sx={{ backgroundColor: '#eaeef7', borderRadius: 1, p: 2 }}>
          {
            productsInOrder.map( p=> (
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
                $ {productsInOrder.reduce((a,b)=> a + (b.quantity*b.price),0)}
              </Typography>
            </Grid>
          </Grid>

        </Grid>

        <Button fullWidth variant="contained" size="large" sx={{ my: 2 }} onClick={createUptdateOrden}>
          {
            searchParams.get('id') === null ? 'Agregar orden' : 'Actualizar orden'
          }
        </Button>

      </Container>
    </>
  )
}
