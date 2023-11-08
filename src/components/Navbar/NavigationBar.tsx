import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const urls = {
  orders: [
    { url: '/Orders/NewOrder', text: 'Nuevo pedido' },
    { url: '/Orders/LayawayOrders', text: 'Apartados' },
    { url: '/Orders/CurrentOrders', text: 'Ordenes en curso' },
    { url: '/Orders/PastOrders', text: 'Ordenes  anteriores' },
  ],
  stock: [
    { url: '/Stock/CurrentStock', text: 'Stock del día' },
    { url: '/Stock/CreateStock', text: 'Nuevo stock' },
  ]
}

export const NavigationBar = () => {
  const location = useLocation();
  return (
    <AppBar position='sticky' sx={{ backgroundColor: 'white'}}>
      <Toolbar sx={{ justifyContent: { xs: 'space-between', sm: 'normal'} }} >

        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          <MenuIcon sx={{ color: 'black' }} />
        </IconButton>

        <Box sx={{ display: { xs: 'none', sm: 'block' }, flexGrow: 1 }}>
          { // ORDERS
            location.pathname.includes('Orders') && urls.orders.map( o => (
              <Link to={o.url} key={o.url}>
                <Button sx={ location.pathname.includes(o.url) ?  { color: '' } : { color: 'black' }}>
                  {o.text}
                </Button>
              </Link>
            ))
          }
          { // STOCK
            location.pathname.includes('Stock') && urls.stock.map( s => (
              <Link to={s.url} key={s.url}>
                <Button sx={ location.pathname.includes(s.url) ?  { color: '' } : { color: 'black' }}>
                  {s.text}
                </Button>
              </Link>
            ))
          }
        </Box>

        <Button sx={{ color: 'black' }} >
          <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
            Pollo Mike
          </Link>
        </Button>

      </Toolbar>
    </AppBar>
  )
}