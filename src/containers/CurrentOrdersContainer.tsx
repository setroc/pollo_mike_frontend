import { useContext } from 'react';
import { Button, ButtonGroup, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

import { OrdersContext } from '../context/orders';

export const CurrentOrdersContainer = () => {
  const { orders } = useContext(OrdersContext);

  return (
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
                    <TableCell align="right">{JSON.stringify(o.orderToProduct)}</TableCell>
                    <TableCell align="right">
                      <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button>Editar</Button>
                        <Button color='error'>Eliminar</Button>
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
  )
}
