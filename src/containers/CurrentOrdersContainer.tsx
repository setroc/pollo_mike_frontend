import { useContext, useState } from 'react';
import { Alert, Button, ButtonGroup, Grid, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

import { OrdersContext } from '../context/orders';
import { useNavigate } from 'react-router-dom';

export const CurrentOrdersContainer = () => {
  const { orders, deleteOrder } = useContext(OrdersContext);
  const navigate = useNavigate();

  const edit = (id:number) => {
    navigate({
      pathname: '/EditOrder',
      search: `?id=${id}`,
    });
  }

  const remove = async (id:number) => {
    const { ok, msg } = await deleteOrder(id);
    setResponse({ok, msg, open: true});
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

      <Grid container
        alignContent='flex-start'
        sx={{
          flex: 1,
          overflow: 'hidden',
          p: 2
        }}
      >
        <Grid item xs={12}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Turno</TableCell>
                  <TableCell align="right">Nombre del cliente</TableCell>
                  <TableCell align="right">Pedido</TableCell>
                  <TableCell align="right">Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  orders.map(o => (
                    <TableRow
                      key={o.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">{o.number}</TableCell>
                      <TableCell align="right">{o.clientName}</TableCell>
                      <TableCell align="right">
                        {
                          o.orderToProduct.map(ot=> (
                            <Typography variant='body2' key={ot.productId}>
                              {ot.quantity} - {ot.product!.description}
                            </Typography>
                          ))
                        }

                      </TableCell>
                      <TableCell align="right">
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                          <Button onClick={() => edit(o.id)}>Editar</Button>
                          <Button color='error' onClick={() => remove(o.id)}>Eliminar</Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  )
}
