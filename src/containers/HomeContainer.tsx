import { Box, Button, ButtonGroup, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { NavigationBar } from "../components"


export const HomeContainer = () => {
  return (
    <Box 
      sx={{ 
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        display: 'flex'
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          flex: 1 
        }}
      >
        <Box>
          <NavigationBar />
        </Box>
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
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        hola
                      </TableCell>
                      <TableCell align="right">hola</TableCell>
                      <TableCell align="right">hola</TableCell>
                      <TableCell align="right">
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                          <Button>Editar</Button>
                          <Button color='error'>Eliminar</Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

        </Grid>
      </Box>
    </Box>
  )
}