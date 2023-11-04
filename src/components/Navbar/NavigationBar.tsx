import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

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
            <Button sx={ location.pathname.includes('NewOrder') ?  { color: '' } : { color: 'black' }} >
              <Link to='/Orders/NewOrder' style={{ textDecoration: 'none', color: 'inherit' }}>
                Nuevo pedido
              </Link>
            </Button>
            <Button sx={location.pathname.includes('LayawayOrders') ?  { color: '' } : { color: 'black' }} >
              <Link to='/Orders/LayawayOrders' style={{ textDecoration: 'none', color: 'inherit' }}>
                Apartados
              </Link>
            </Button>
            <Button sx={location.pathname.includes('CurrentOrders') ?  { color: '' } : { color: 'black' }} >
              <Link to='/Orders/CurrentOrders' style={{ textDecoration: 'none', color: 'inherit' }}>
                Ordenes en curso
              </Link>
            </Button>
            <Button sx={location.pathname.includes('PastOrders') ?  { color: '' } : { color: 'black' }} >
              <Link to='/Orders/PastOrders' style={{ textDecoration: 'none', color: 'inherit' }}>
                Ordenes  anteriores
              </Link>
            </Button>
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