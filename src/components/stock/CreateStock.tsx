import { ChangeEvent, useContext, useRef, useState } from "react";
import { NumbersRounded } from "@mui/icons-material";
import { Alert, Container, Fab, InputAdornment, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import { ProductsContext } from "../../context/product";
import { getDate } from "../../utils";


interface productsInStock {
  productId:number,
  quantity:number
}
export const CreateStock = () => {
  
  const { products } = useContext(ProductsContext);

  const [stock, setStock] = useState<productsInStock[]>([]);
  const quantityChange = (e:ChangeEvent<HTMLInputElement>) => {
    if (!stock.find( s => s.productId === Number(e.target.id))) { // no lo encontro
      setStock([...stock, { productId: Number(e.target.id), quantity: Number(e.target.value) }]);
    } else {
      setStock(stock.map(s => {
        if (s.productId === Number(e.target.id)) s.quantity = Number(e.target.value);
        return s;
      }));
    }
  }

  const addStock = async () => {
    try {
      if (stock.length === 0) {
        setResponse({ok: false, msg: 'Debe ingresar cantidades a los productos.', open: true});
        return;
      }
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/stock/register`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date: getDate(), products: stock }),
      });
      if (res.ok) {
        setResponse({ok: true, msg: 'Stock creado correctamente.', open: true});
        setStock([]);
        formRef.current?.reset();
      } else {
        const body = await res.json();
        setResponse({ok: false, msg: body.message, open: true});
      }
    } catch (error) {
      console.error(error);
    }
  }

  const [response, setResponse] = useState({ok: false, msg: '', open: false});
  const handleCloseSnackbar = () => {
    setResponse({ok: false, msg: '', open: false});
  }

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Container fixed>
      <form ref={formRef}>
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
              {
                products.map(p => (
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={p.id}>
                    <TableCell>{p.title}</TableCell>
                    <TableCell>{p.description}</TableCell>
                    <TableCell>$ {p.price}</TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        size='small'
                        name={`${p.id}`}
                        id={`${p.id}`}
                        onChange={quantityChange}
                        type="number"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <NumbersRounded />
                            </InputAdornment>
                          )
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </form>

      <Fab 
        variant="extended" 
        color="primary" 
        sx={{position: 'absolute', bottom: 40, right: 40}}
        onClick={addStock}
      >
        <AddIcon sx={{ mr: 1}} />
        Agregar
      </Fab>

      <Snackbar open={response.open} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} onClose={handleCloseSnackbar}>
        <Alert severity={response.ok ? 'success' : 'error'} sx={{ width: '100%' }}>
          {response.msg}
        </Alert>
      </Snackbar>
    </Container>
  )
}
