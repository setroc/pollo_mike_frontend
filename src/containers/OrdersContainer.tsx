import { FC, useContext, useState } from 'react';
import { Alert, Button, Grid, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

import { OrdersContext } from '../context/orders';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

interface Props {
  state: number;
}
export const OrdersContainer : FC<Props> = ({state}) => {
  const { orders, deleteOrder, changeOrderState } = useContext(OrdersContext);
  const navigate = useNavigate();

  const updateState = async (id:number, state: number) => {
    const { ok, msg } = await changeOrderState(id, state);
    setResponse({ok, msg, open: true});
  }

  const edit = (id:number) => {
    navigate({
      pathname: '/Orders/EditOrder',
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
          p: 2,
          backgroundColor: '#f1f5fe',
        }}
      >
        <Grid item xs={12}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{backgroundColor: 'white'}}>
                  <TableCell>{ state === 0 ? 'Hora' : 'Turno' }</TableCell>
                  <TableCell align="right">Nombre del cliente</TableCell>
                  <TableCell align="right">Pedido</TableCell>
                  <TableCell align="right">Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  orders.map(o => {
                      if (o.state === state) {
                        return (
                          <TableRow
                            key={o.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: 'white' }}
                          >
                            <TableCell component="th" scope="row">{ state === 0 ? dayjs(o.date.slice(0,-1)).format('LT') : o.number}</TableCell>
                            <TableCell align="right">{o.clientName}</TableCell>
                            <TableCell align="right">
                              {
                                o.products.map(p=> (
                                  <Typography variant='body2' key={p.id}>
                                    {p.quantity} - {p.title}
                                  </Typography>
                                ))
                              }
      
                            </TableCell>
                            <TableCell align="right">
                              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                                {
                                  state === 0 && (
                                    <>
                                      <Button variant='contained' color='success' size='large' onClick={() => updateState(o.id, 1)}>Mover</Button>
                                      <Button variant='contained' size='large' onClick={() => edit(o.id)}>Editar</Button>
                                    </>
                                  ) 
                                }
                                {
                                  state === 1 && (
                                    <>
                                      <Button variant='contained' color='success' size='large' onClick={() => updateState(o.id, 2)}>Completar</Button>
                                      <Button variant='contained' size='large' onClick={() => edit(o.id)}>Editar</Button>
                                    </>
                                  )
                                }
                                <Button variant='contained' color='error' size='large' onClick={() => remove(o.id)}>Eliminar</Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        )
                      }
                    }
                  )
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  )
}
