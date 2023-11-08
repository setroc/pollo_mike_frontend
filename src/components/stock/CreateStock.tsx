import { Box, Container, Divider, Grid, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"

export const CreateStock = () => {
  return (
    <Container fixed>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell>Detalle</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Cantidad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>Pollo</TableCell>
              <TableCell>Pollo asado al carbón</TableCell>
              <TableCell>$ 200</TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  // Puedes agregar aquí eventos para manejar cambios en el campo de texto
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
